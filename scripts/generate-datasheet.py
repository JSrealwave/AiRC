#!/usr/bin/env python3
"""Generate the AiRC FlexWATCH Edge AI family datasheet (2 pages)."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.lib.utils import ImageReader
from reportlab.platypus import (
    Image,
    KeepTogether,
    ListFlowable,
    PageBreak,
    ListItem,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "resources" / "airc-flexwatch-edge-ai-datasheet.pdf"
PHOTO = ROOT / "public" / "products" / "flexwatch" / "fw7300_103a825ea1.png"
MODULE = ROOT / "public" / "products" / "flexwatch" / "ee1_307_d303e0f67d.png"

NAVY = colors.HexColor("#1B2A44")
ACCENT = colors.HexColor("#3B7DD8")
AMBER = colors.HexColor("#D4A017")
RULE = colors.HexColor("#C5CDD6")
ROW = colors.HexColor("#F4F7FA")
INK = colors.HexColor("#1A1F27")
MUTED = colors.HexColor("#4B5563")


def styles():
    base = getSampleStyleSheet()
    return {
        "kicker": ParagraphStyle(
            "kicker",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8,
            textColor=AMBER,
            tracking=1.2,
            spaceAfter=4,
        ),
        "h1": ParagraphStyle(
            "h1",
            parent=base["Title"],
            fontName="Helvetica-Bold",
            fontSize=20,
            leading=24,
            textColor=NAVY,
            alignment=TA_LEFT,
            spaceAfter=8,
        ),
        "h2": ParagraphStyle(
            "h2",
            parent=base["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=11,
            leading=14,
            textColor=NAVY,
            spaceBefore=12,
            spaceAfter=6,
        ),
        "body": ParagraphStyle(
            "body",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=9,
            leading=12.5,
            textColor=INK,
            alignment=TA_JUSTIFY,
            spaceAfter=6,
        ),
        "small": ParagraphStyle(
            "small",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8,
            leading=11,
            textColor=MUTED,
        ),
        "cell": ParagraphStyle(
            "cell",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.5,
            leading=10,
            textColor=INK,
        ),
        "cellb": ParagraphStyle(
            "cellb",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=7.5,
            leading=10,
            textColor=NAVY,
        ),
        "th": ParagraphStyle(
            "th",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=7.5,
            leading=10,
            textColor=colors.white,
        ),
        "footer": ParagraphStyle(
            "footer",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.5,
            textColor=colors.HexColor("#6B7280"),
            alignment=TA_CENTER,
        ),
        "li": ParagraphStyle(
            "li",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9,
            leading=12,
            textColor=INK,
        ),
    }


def header_footer(canvas, doc):
    canvas.saveState()
    w, h = letter
    canvas.setFillColor(NAVY)
    canvas.rect(0, h - 36, w, 36, fill=1, stroke=0)
    canvas.setFillColor(colors.white)
    canvas.setFont("Helvetica-Bold", 9)
    canvas.drawString(0.7 * inch, h - 22, "AiRC  ·  Active Image Recognition Command")
    canvas.setFont("Helvetica", 8)
    canvas.drawRightString(w - 0.7 * inch, h - 22, "FlexWATCH Edge AI family  ·  DS-FW-H8L-2026.08")
    canvas.setFillColor(AMBER)
    canvas.rect(0, h - 38, w, 2.5, fill=1, stroke=0)

    canvas.setFillColor(NAVY)
    canvas.rect(0, 0, w, 32, fill=1, stroke=0)
    canvas.setFillColor(colors.white)
    canvas.setFont("Helvetica", 7.5)
    canvas.drawString(
        0.7 * inch,
        14,
        "Confidential to intended B2B recipients  ·  Seyeon FlexWATCH partner catalog  ·  Not a quote",
    )
    canvas.drawRightString(w - 0.7 * inch, 14, f"Page {doc.page} of 2")
    canvas.restoreState()


def sku_table(S):
    headers = ["Model", "Form", "Res.", "Shutter", "SoC / notes", "Primary use"]
    rows_raw = [
        ["FWC-EE1-307", "Module", "2MP", "Rolling", "Eyenix, 1-board", "Compact ITS / lane"],
        ["FWC-EX2-0234", "Module", "2MP", "Global", "Eyenix", "High-speed plate"],
        ["FWC-EX1-567", "Module", "5MP", "Global", "Eyenix", "Multi-lane ANPR"],
        ["FWC-EX1-565", "Module", "8MP", "Global", "Eyenix", "Plaza / wide FOV"],
        ["FWC-EX1-412", "Module", "12MP", "Rolling", "Eyenix", "Intersection overview"],
        ["FWM-EX1-L2M", "LVDS board", "2/4MP", "Host", "Eyenix, LVDS", "PTZ embed"],
        ["FW1172-A3T55", "Mainboard", "5MP", "Host", "Ambarella", "PTZ / custom core"],
        ["FWM-EX1-H2M", "LVDS board", "8MP", "Host", "Eyenix, LVDS", "4K-class PTZ embed"],
        ["FW7300-GPN", "Box camera", "5MP", "Global", "LPR / ANPR", "Dedicated plate cam"],
        ["FW7300-GKN", "Box camera", "4K", "Global", "LPR / ANPR", "Plate + class + FOV"],
        ["FW7511-PEM", "Dome", "5MP", "Rolling", "Autofocus vandal", "Plaza / facility"],
        ["FW7904-PXM", "PTZ bullet", "5MP", "Rolling", "Finished PTZ", "Corridor / OEM eval"],
    ]
    data = [[Paragraph(h, S["th"]) for h in headers]]
    for row in rows_raw:
        data.append(
            [
                Paragraph(row[0], S["cellb"]),
                Paragraph(row[1], S["cell"]),
                Paragraph(row[2], S["cell"]),
                Paragraph(row[3], S["cell"]),
                Paragraph(row[4], S["cell"]),
                Paragraph(row[5], S["cell"]),
            ]
        )
    usable = 7.1 * inch
    table = Table(
        data,
        colWidths=[1.25 * inch, 0.95 * inch, 0.55 * inch, 0.7 * inch, 1.45 * inch, 2.2 * inch],
        repeatRows=1,
    )
    table._col_sum = usable  # documentation only
    cmds = [
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 4),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        ("GRID", (0, 0), (-1, -1), 0.3, RULE),
        ("ALIGN", (2, 1), (3, -1), "CENTER"),
    ]
    for i in range(1, len(data)):
        if i % 2 == 0:
            cmds.append(("BACKGROUND", (0, i), (-1, i), ROW))
    table.setStyle(TableStyle(cmds))
    return table


def photo(path: Path, width: float):
    reader = ImageReader(str(path))
    iw, ih = reader.getSize()
    height = width * ih / iw
    img = Image(str(path), width=width, height=height)
    img.hAlign = "CENTER"
    return img


def build():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    S = styles()
    doc = SimpleDocTemplate(
        str(OUT),
        pagesize=letter,
        leftMargin=0.7 * inch,
        rightMargin=0.7 * inch,
        topMargin=0.7 * inch,
        bottomMargin=0.55 * inch,
        title="AiRC FlexWATCH Edge AI Family Datasheet",
        author="Active Image Recognition Command",
        subject="Seyeon FlexWATCH modules and finished cameras with Hailo-8L integration",
    )

    story = []
    story.append(Paragraph("DATASHEET  ·  AUGUST 2026", S["kicker"]))
    story.append(Paragraph("FlexWATCH Edge AI camera family", S["h1"]))
    story.append(
        Paragraph(
            "AiRC distributes and integrates official <b>Seyeon Tech FlexWATCH</b> "
            "modules and finished cameras, and quotes <b>Hailo-8L</b> (13 TOPS, ~1.5&nbsp;W) "
            "as an on-device AI attach. Model numbers below are Seyeon’s — not private "
            "placeholders. Zoom-block and thermal SKUs are withheld until Seyeon confirms them.",
            S["body"],
        )
    )

    left_bits = [
        photo(PHOTO, 3.15 * inch),
        Paragraph(
            "FW7300-GKN — 4K global-shutter box camera, catalogued for LPR / ANPR.",
            S["small"],
        ),
    ]
    right_copy = [
        Paragraph("Positioning", S["h2"]),
        Paragraph(
            "For toll / ETC operators, ITS integrators, and PTZ OEMs who need to add "
            "proprietary models at the edge without a multi-year camera redesign. "
            "Keep qualified optics. Attach FlexWATCH over BT1120, LVDS, or YUV. "
            "Land ONVIF on the incumbent VMS.",
            S["body"],
        ),
        Paragraph("Hailo-8L attach (via AiRC)", S["h2"]),
        ListFlowable(
            [
                ListItem(Paragraph("13 TOPS, approximately 1.5 W", S["li"]), leftIndent=8),
                ListItem(Paragraph("Multi-model: plate, class, tamper, behavior", S["li"]), leftIndent=8),
                ListItem(Paragraph("Industrial temperature class", S["li"]), leftIndent=8),
                ListItem(Paragraph("FlexWATCH Open AI SDK — five-step model path", S["li"]), leftIndent=8),
            ],
            bulletType="bullet",
            start="•",
            leftIndent=12,
            bulletFontName="Helvetica",
            bulletFontSize=9,
        ),
    ]
    hero = Table(
        [[left_bits, right_copy]],
        colWidths=[3.35 * inch, 3.75 * inch],
    )
    hero.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (0, 0), 0),
                ("RIGHTPADDING", (0, 0), (0, 0), 10),
                ("LEFTPADDING", (1, 0), (1, 0), 8),
                ("RIGHTPADDING", (1, 0), (1, 0), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 4),
            ]
        )
    )
    story.append(Spacer(1, 8))
    story.append(hero)

    story.append(Paragraph("Architecture", S["h2"]))
    story.append(
        Paragraph(
            "<b>Sony CMOS</b> (rolling or global, 2–12&nbsp;MP) → <b>FlexWATCH SoC</b> "
            "(Eyenix or Ambarella, NDAA-free, ONVIF S/T/M) → <b>Hailo-8L</b> "
            "(AiRC integration) → <b>your VMS</b>. Inputs: BT1120 · LVDS · YUV.",
            S["body"],
        )
    )

    story.append(Paragraph("Compliance and interfaces", S["h2"]))
    story.append(
        Paragraph(
            "<b>NDAA-free SoC path:</b> Eyenix and Ambarella, plus Hailo. "
            "<b>ONVIF:</b> Profile S and T on all quoted SKUs; Profile M on AI / metadata "
            "builds. <b>SDK:</b> FlexWATCH Open AI SDK for customer-owned models. "
            "<b>Not in this datasheet:</b> zoom-block cameras and thermal / dual-band "
            "imagers — pending Seyeon confirmation.",
            S["body"],
        )
    )

    story.append(Paragraph("Typical starting configurations", S["h2"]))
    story.append(
        ListFlowable(
            [
                ListItem(
                    Paragraph(
                        "<b>Dedicated plate lane:</b> FWC-EX2-0234 module or FW7300-GPN box. Global shutter first.",
                        S["li"],
                    ),
                    leftIndent=8,
                ),
                ListItem(
                    Paragraph(
                        "<b>Plaza / free-flow:</b> FW7300-GKN (4K global) plus a rolling-shutter overview (FWC-EE1-307 or FW7511-PEM).",
                        S["li"],
                    ),
                    leftIndent=8,
                ),
                ListItem(
                    Paragraph(
                        "<b>PTZ OEM embed:</b> FWM-EX1-L2M or FW1172-A3T55. Keep the existing pan-tilt block; attach over LVDS.",
                        S["li"],
                    ),
                    leftIndent=8,
                ),
            ],
            bulletType="bullet",
            start="•",
            leftIndent=12,
            bulletFontName="Helvetica",
            bulletFontSize=9,
        )
    )
    story.append(Spacer(1, 8))
    story.append(photo(MODULE, 2.4 * inch))
    story.append(
        Paragraph(
            "FWC-EE1-307 — 2MP rolling-shutter single-board module (Eyenix).",
            S["small"],
        )
    )

    story.append(PageBreak())
    story.append(Paragraph("Launch catalog — official Seyeon models", S["h2"]))
    story.append(
        Paragraph(
            "These twelve SKUs are the Phase 1 quote set. Hailo-8L is quoted by AiRC "
            "on FlexWATCH hardware. It is not listed as a factory option on every "
            "Seyeon SKU. Confirm SoC revision and shutter at order.",
            S["body"],
        )
    )
    story.append(sku_table(S))
    story.append(Spacer(1, 10))

    story.append(Paragraph("How to buy", S["h2"]))
    story.append(
        Paragraph(
            "Phase 1 is request-quote only. Volume, Hailo-8L attach, private-label, "
            "and integration scope are quoted per deployment. Reference this document "
            "as <b>DS-FW-H8L-2026.08</b>. Application note: Toll lane &amp; free-flow ANPR "
            "(AiRC site, /resources/toll-anpr).",
            S["body"],
        )
    )

    story.append(Spacer(1, 8))
    story.append(
        Paragraph(
            "© 2026 Active Image Recognition Command. Product photos © Seyeon Tech. "
            "Specifications subject to Seyeon revision. This sheet is not a commercial offer.",
            S["small"],
        )
    )

    doc.build(story, onFirstPage=header_footer, onLaterPages=header_footer)
    print(f"wrote {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    build()
