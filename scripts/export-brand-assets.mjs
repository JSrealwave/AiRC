#!/usr/bin/env node
/**
 * Export AiRC brand PNGs / ICO from the JPG masters in logo/.
 * Keys out the navy studio field; does not redraw the mark.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const NAVY = { r: 11, g: 31, b: 58 }; // #0B1F3A

function dist(r, g, b, c) {
  const dr = r - c.r;
  const dg = g - c.g;
  const db = b - c.b;
  return Math.sqrt(dr * dr + dg * dg + db * db);
}

function isOrange(r, g, b) {
  return r > 160 && r > g + 30 && r > b + 40 && g < 190;
}

async function keyNavy(inputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const out = Buffer.from(data);

  for (let i = 0; i < out.length; i += channels) {
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const dNavy = dist(r, g, b, { r: 21, g: 29, b: 52 });

    if (isOrange(r, g, b)) {
      out[i] = Math.max(r, 240);
      out[i + 1] = Math.min(g, 110);
      out[i + 2] = Math.min(b, 40);
      out[i + 3] = 255;
      continue;
    }

    // Dark JPEG fringe / navy field → fully transparent
    if (dNavy < 55 || lum < 118) {
      out[i + 3] = 0;
      continue;
    }

    // White mark — flatten remaining compression tint
    if (lum > 118 && Math.abs(r - g) < 55 && Math.abs(g - b) < 55) {
      out[i] = 255;
      out[i + 1] = 255;
      out[i + 2] = 255;
      out[i + 3] = 255;
      continue;
    }

    out[i + 3] = 0;
  }

  return sharp(out, { raw: { width, height, channels: 4 } }).png();
}

async function trimToContent(img, padRatio = 0.04) {
  const buf = await img.png().toBuffer();
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({
    resolveWithObject: true,
  });
  const { width, height } = info;
  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const a = data[(y * width + x) * 4 + 3];
      if (a > 12) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }
  const bw = maxX - minX + 1;
  const bh = maxY - minY + 1;
  const pad = Math.round(Math.max(bw, bh) * padRatio);
  const left = Math.max(0, minX - pad);
  const top = Math.max(0, minY - pad);
  const cropW = Math.min(width - left, bw + pad * 2);
  const cropH = Math.min(height - top, bh + pad * 2);
  return sharp(buf).extract({ left, top, width: cropW, height: cropH }).png();
}

async function fitSquare(img, size, padding = 0.08) {
  const inner = Math.round(size * (1 - padding * 2));
  const resized = await img
    .resize({
      width: inner,
      height: inner,
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: resized, gravity: "center" }])
    .png();
}

async function toNavyMark(img) {
  const { data, info } = await img.ensureAlpha().raw().toBuffer({
    resolveWithObject: true,
  });
  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += 4) {
    if (out[i + 3] === 0) continue;
    if (isOrange(out[i], out[i + 1], out[i + 2])) continue;
    out[i] = NAVY.r;
    out[i + 1] = NAVY.g;
    out[i + 2] = NAVY.b;
  }
  return sharp(out, {
    raw: { width: info.width, height: info.height, channels: 4 },
  }).png();
}

function makeIco(images) {
  const count = images.length;
  const headerSize = 6 + 16 * count;
  let offset = headerSize;
  const payloads = [];
  for (const img of images) {
    payloads.push({ img, offset, size: img.length });
    offset += img.length;
  }
  const buf = Buffer.alloc(offset);
  buf.writeUInt16LE(0, 0);
  buf.writeUInt16LE(1, 2);
  buf.writeUInt16LE(count, 4);
  let dir = 6;
  for (let i = 0; i < images.length; i++) {
    const { width, height } = images[i]._meta;
    buf.writeUInt8(width >= 256 ? 0 : width, dir);
    buf.writeUInt8(height >= 256 ? 0 : height, dir + 1);
    buf.writeUInt8(0, dir + 2);
    buf.writeUInt8(0, dir + 3);
    buf.writeUInt16LE(1, dir + 4);
    buf.writeUInt16LE(32, dir + 6);
    buf.writeUInt32LE(payloads[i].size, dir + 8);
    buf.writeUInt32LE(payloads[i].offset, dir + 12);
    images[i].copy(buf, payloads[i].offset);
    dir += 16;
  }
  return buf;
}

async function pngSize(img, width, height) {
  const buf = await img
    .resize({
      width,
      height,
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
  buf._meta = { width, height };
  return buf;
}

async function write(path, img) {
  mkdirSync(dirname(path), { recursive: true });
  await img.png().toFile(path);
  const meta = await sharp(path).metadata();
  console.log("wrote", path.replace(root + "/", ""), `${meta.width}x${meta.height}`);
}

async function main() {
  mkdirSync(join(root, "public/brand"), { recursive: true });
  mkdirSync(join(root, "logo/archive"), { recursive: true });
  mkdirSync(join(root, "app"), { recursive: true });

  const bugKeyed = await trimToContent(await keyNavy(join(root, "logo/AiRC-bug.jpg")), 0.06);
  const lockupKeyed = await trimToContent(
    await keyNavy(join(root, "logo/AiRC-bug-logo.jpg")),
    0.08,
  );
  const wordKeyed = await trimToContent(
    await keyNavy(join(root, "logo/AiRC-no-bug-logo.jpg")),
    0.08,
  );

  const bug512 = await fitSquare(bugKeyed, 512, 0.06);
  await write(join(root, "public/brand/bug.png"), bug512);
  await write(join(root, "public/brand/bug-512.png"), bug512);
  await write(join(root, "public/brand/bug-192.png"), await fitSquare(bugKeyed, 192, 0.06));
  await write(join(root, "public/brand/bug-32.png"), await fitSquare(bugKeyed, 32, 0.06));
  await write(join(root, "public/brand/bug-16.png"), await fitSquare(bugKeyed, 16, 0.04));

  const lockupMeta = await (await lockupKeyed.clone().png().toBuffer().then((b) => sharp(b).metadata()));
  const lockupH = 160;
  const lockupW = Math.round((lockupMeta.width / lockupMeta.height) * lockupH);
  const logoMaster = lockupKeyed.clone().resize({
    height: lockupH,
    width: lockupW,
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  });
  await write(join(root, "public/brand/logo.png"), logoMaster);
  await write(join(root, "public/brand/logo-dark.png"), logoMaster);
  const lightMaster = await toNavyMark(logoMaster.clone());
  await write(join(root, "public/brand/logo-light.png"), lightMaster);

  const wordMeta = await wordKeyed.clone().png().toBuffer().then((b) => sharp(b).metadata());
  const wordH = 120;
  const wordW = Math.round((wordMeta.width / wordMeta.height) * wordH);
  await write(
    join(root, "public/brand/wordmark.png"),
    wordKeyed.clone().resize({
      height: wordH,
      width: wordW,
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    }),
  );

  const icon32 = await fitSquare(bugKeyed, 32, 0.06);
  await write(join(root, "app/icon.png"), icon32);

  const ico16 = await pngSize(await fitSquare(bugKeyed, 16, 0.04), 16, 16);
  const ico32 = await pngSize(await fitSquare(bugKeyed, 32, 0.06), 32, 32);
  const ico48 = await pngSize(await fitSquare(bugKeyed, 48, 0.06), 48, 48);
  writeFileSync(join(root, "app/favicon.ico"), makeIco([ico16, ico32, ico48]));
  console.log("wrote app/favicon.ico");

  const appleSize = 180;
  const pad = Math.round(appleSize * 0.18);
  const inner = appleSize - pad * 2;
  const appleBug = await (
    await fitSquare(bugKeyed, inner, 0)
  )
    .png()
    .toBuffer();
  const radius = Math.round(appleSize * 0.22);
  const tile = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${appleSize}" height="${appleSize}">
      <rect width="${appleSize}" height="${appleSize}" rx="${radius}" fill="#0B1F3A"/>
    </svg>`,
  );
  await sharp(tile)
    .png()
    .composite([{ input: appleBug, gravity: "center" }])
    .toFile(join(root, "app/apple-icon.png"));
  console.log("wrote app/apple-icon.png 180x180");

  const ogW = 1200;
  const ogH = 630;
  const ogLockupH = 150;
  const ogLockupW = Math.round((lockupMeta.width / lockupMeta.height) * ogLockupH);
  const ogLockup = await lockupKeyed
    .clone()
    .resize({
      width: ogLockupW,
      height: ogLockupH,
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
  const tag = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="700" height="48">
      <text x="0" y="32" fill="#FFFFFF" fill-opacity="0.82"
        font-family="Helvetica, Arial, sans-serif" font-size="28">Edge AI camera modules</text>
    </svg>`,
  );
  const ogLeft = 96;
  const ogTop = Math.round((ogH - ogLockupH - 64) / 2);
  await sharp({
    create: {
      width: ogW,
      height: ogH,
      channels: 3,
      background: NAVY,
    },
  })
    .composite([
      { input: ogLockup, left: ogLeft, top: ogTop },
      { input: tag, left: ogLeft, top: ogTop + ogLockupH + 16 },
    ])
    .png()
    .toFile(join(root, "public/brand/og.png"));
  console.log("wrote public/brand/og.png 1200x630");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
