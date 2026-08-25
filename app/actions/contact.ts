"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { contactFormSchema, type ContactFormInput } from "@/lib/validations";
import { siteConfig } from "@/lib/site";

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

const SUBJECT_PREFIX: Record<ContactFormInput["formType"], string> = {
  quote: "[AiRC Quote]",
  integration: "[AiRC Integration]",
  partnership: "[AiRC Partnership]",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function field(label: string, value: string | undefined): string {
  const text = value?.trim() ? value : "—";
  return `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(text)}</p>`;
}

function textField(label: string, value: string | undefined): string {
  const text = value?.trim() ? value : "—";
  return `${label}: ${text}`;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    formType: formData.get("formType"),
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    role: formData.get("role") || undefined,
    phone: formData.get("phone") || undefined,
    message: formData.get("message"),
    productInterest: formData.get("productInterest") || undefined,
  };

  const parsed = contactFormSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please correct the errors below.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const data = parsed.data;
  const requestHeaders = await headers();
  const submittedAt = new Date().toISOString();
  const pagePath = requestHeaders.get("referer") ?? siteConfig.url;
  const userAgent = requestHeaders.get("user-agent") ?? undefined;

  const payload = {
    ...data,
    submittedAt,
    pagePath,
    userAgent,
  };

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.CONTACT_EMAIL ?? siteConfig.email;

  if (!apiKey || !from || !to) {
    const missing = [
      !apiKey && "RESEND_API_KEY",
      !from && "RESEND_FROM",
      !to && "CONTACT_EMAIL",
    ].filter(Boolean);
    console.error("[Contact form] Missing mail configuration:", missing.join(", "));
    return {
      success: false,
      message:
        "Email is not configured. Please write us at sales@activeimagerecognition.com or call (858) 876-2276.",
    };
  }

  const prefix = SUBJECT_PREFIX[data.formType] ?? "[AiRC Contact]";
  const subject = `${prefix} ${data.company} — ${data.name}`;

  const html = `
    <h2>${escapeHtml(prefix)}</h2>
    ${field("Name", data.name)}
    ${field("Email", data.email)}
    ${field("Company", data.company)}
    ${field("Role", data.role)}
    ${field("Phone", data.phone)}
    ${field("Product / vertical", data.productInterest)}
    ${field("Message", data.message)}
    ${field("Submitted at", submittedAt)}
    ${field("Page", pagePath)}
    ${field("User agent", userAgent)}
  `;

  const text = [
    prefix,
    textField("Name", data.name),
    textField("Email", data.email),
    textField("Company", data.company),
    textField("Role", data.role),
    textField("Phone", data.phone),
    textField("Product / vertical", data.productInterest),
    textField("Message", data.message),
    textField("Submitted at", submittedAt),
    textField("Page", pagePath),
    textField("User agent", userAgent),
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject,
      html,
      text,
    });

    if (result.error) {
      console.error("[Contact form] Resend error:", result.error);
      return {
        success: false,
        message:
          "Submission failed. Please email sales@activeimagerecognition.com or call (858) 876-2276.",
      };
    }
  } catch (error) {
    console.error("[Contact form] Resend send failed:", error);
    return {
      success: false,
      message:
        "Submission failed. Please email sales@activeimagerecognition.com or call (858) 876-2276.",
    };
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    const webhookResult = await Promise.allSettled([
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }),
    ]);
    const outcome = webhookResult[0];
    if (outcome.status === "rejected") {
      console.error("[Contact form] Webhook failed:", outcome.reason);
    } else if (!outcome.value.ok) {
      console.error(
        "[Contact form] Webhook HTTP",
        outcome.value.status,
        await outcome.value.text().catch(() => ""),
      );
    }
  }

  return {
    success: true,
    message:
      "Thank you. Our team will respond within one business day. For urgent integration questions, note your timeline in follow-up correspondence.",
  };
}
