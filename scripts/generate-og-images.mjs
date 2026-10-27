import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const outputRoot = path.join(root, 'public/og');
const pwaIconRoot = path.join(root, 'public/icons');
const publicRoot = path.join(root, 'public');
const brandMark = await readFile(path.join(root, 'public/tau.svg'));
const brandMarkData = `data:image/svg+xml;base64,${brandMark.toString('base64')}`;
const paulPhoto = await readFile(path.join(root, 'src/assets/team/paul-guillamon.jpeg'));
const paulPhotoData = `data:image/jpeg;base64,${paulPhoto.toString('base64')}`;
const locales = ['es', 'en', 'fr', 'ca'];
const accents = {
  home: { line: '#EC1978', text: '#EC1978' },
  services: { line: '#6853A2', text: '#6853A2' },
  projects: { line: '#EC1978', text: '#EC1978' },
  team: { line: '#5ABE93', text: '#5ABE93' },
  contact: { line: '#FBAF18', text: '#FBAF18' },
  'diseno-web': { line: '#6853A2', text: '#6853A2' },
  'desarrollo-web': { line: '#EC1978', text: '#EC1978' },
  'marketing-digital': { line: '#5ABE93', text: '#5ABE93' },
  seo: { line: '#FBAF18', text: '#FBAF18' },
  'migraciones-y-mantenimiento': { line: '#6853A2', text: '#6853A2' },
};

const escapeXml = (text) => String(text)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

function fittedFontSize(text, baseSize, maxWidth) {
  const estimate = [...text].length * baseSize * 0.54;
  return estimate > maxWidth ? Math.max(34, Math.floor(baseSize * maxWidth / estimate)) : baseSize;
}

function wrapText(text, limit = 88) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = '';
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > limit && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 2);
}

function buildSvg({ section, title, accent, description, color, textColor, portrait = false }) {
  const titleSize = fittedFontSize(title, 76, 850);
  const accentSize = accent ? fittedFontSize(accent, 58, 850) : 0;
  const hasAccent = Boolean(accent);
  const lines = wrapText(description);
  const descriptionY = hasAccent ? 184 : 148;
  const descriptionSvg = lines.map((line, index) =>
    `<text x="0" y="${descriptionY + index * 31}" fill="#111827" opacity=".68" font-family="Poppins, Arial, sans-serif" font-size="21" font-weight="300">${escapeXml(line)}</text>`,
  ).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#F9FAFB"/>
  <g opacity=".1" stroke="#111827" stroke-width="1">
    <path d="M72 0v630M300 0v630M600 0v630M900 0v630M1128 0v630"/>
    <path d="M0 112h1200M0 315h1200M0 518h1200"/>
  </g>
  <g fill="#111827" opacity=".42"><rect x="72" y="112" width="5" height="5"/><rect x="1123" y="518" width="5" height="5"/></g>
  <g transform="translate(72 72)">
    <rect width="7" height="7" fill="#FBAF18"/>
    <text x="22" y="8" fill="#111827" font-family="Poppins, Arial, sans-serif" font-size="14" font-weight="500" letter-spacing="3">TAU STUDIO / ${escapeXml(section.toLocaleUpperCase())}</text>
  </g>
  ${portrait
    ? `<image href="${paulPhotoData}" x="925" y="112" width="190" height="190"/>`
    : `<image href="${brandMarkData}" x="925" y="110" width="190" height="219"/>`}
  <g transform="translate(72 198)">
    <text fill="#111827" font-family="Poppins, Arial, sans-serif" font-size="${titleSize}" font-weight="500" letter-spacing="-4">${escapeXml(title)}</text>
    ${hasAccent ? `<text y="88" fill="${textColor}" font-family="Poppins, Arial, sans-serif" font-size="${accentSize}" font-weight="500" letter-spacing="-2">${escapeXml(accent)}</text>` : ''}
    <rect y="${hasAccent ? 132 : 100}" width="120" height="3" fill="${color}"/>
    ${descriptionSvg}
  </g>
  <text x="72" y="566" fill="#111827" opacity=".64" font-family="Poppins, Arial, sans-serif" font-size="16" font-weight="300" letter-spacing="2">tau.studio</text>
  <text x="1128" y="566" text-anchor="end" fill="#111827" opacity=".64" font-family="Poppins, Arial, sans-serif" font-size="14" font-weight="300" letter-spacing="1">${escapeXml(section.toLocaleUpperCase())} · TAU STUDIO</text>
</svg>`;
}

function getOgPages(locale, copy) {
  const standard = [
    { file: 'home', section: copy.home.eyebrow, title: copy.home.title, accent: copy.home.titleAccent, description: copy.home.lead },
    { file: 'services', section: copy.services.eyebrow, title: copy.services.title, accent: copy.services.titleAccent, description: copy.services.metaDescription },
    { file: 'projects', section: copy.projects.pageEyebrow, title: copy.projects.pageTitle, accent: copy.projects.pageTitleAccent, description: copy.projects.pageLead },
    { file: 'team', section: copy.team.eyebrow, title: copy.team.title, accent: copy.team.titleAccent, description: copy.team.metaDescription, portrait: true },
    { file: 'contact', section: copy.contact.eyebrow, title: copy.contact.title, accent: copy.contact.titleAccent, description: copy.contact.metaDescription },
  ];
  const serviceKeys = [
    ['diseno-web', 'serviceDesign', 'design'],
    ['desarrollo-web', 'serviceDevelopment', 'development'],
    ['marketing-digital', 'serviceMarketing', 'marketing'],
    ['seo', 'serviceSeo', 'seo'],
    ['migraciones-y-mantenimiento', 'serviceMaintenance', 'maintenance'],
  ];
  const servicePages = serviceKeys.map(([slug, label, key], index) => ({
    file: `service-${slug}`,
    section: `${copy.services.detail.eyebrow} / ${String(index + 1).padStart(2, '0')}`,
    title: copy.home[label],
    accent: copy.services.og[key].accent,
    description: copy.services.og[key].description,
  }));
  return [...standard, ...servicePages].map((page) => {
    const accent = accents[page.file.replace('service-', '')] ?? accents[page.file] ?? accents.services;
    return { ...page, color: accent.line, textColor: accent.text };
  });
}

for (const locale of locales) {
  const copy = JSON.parse(await readFile(path.join(root, `src/i18n/locales/${locale}.json`), 'utf8'));
  const outputDir = path.join(outputRoot, locale);
  await mkdir(outputDir, { recursive: true });
  for (const page of getOgPages(locale, copy)) {
    const svg = buildSvg(page);
    const svgBuffer = Buffer.from(svg);
    await writeFile(path.join(outputDir, `${page.file}.svg`), svgBuffer);
    await sharp(svgBuffer).png({ compressionLevel: 9 }).toFile(path.join(outputDir, `${page.file}.png`));

    const legacySpanishAsset = locale === 'es' ? {
      home: 'og',
      services: 'og-servicios',
      projects: 'og-proyectos',
      team: 'og-equipo',
      contact: 'og-contacto',
    }[page.file] : undefined;
    if (legacySpanishAsset) {
      await writeFile(path.join(publicRoot, `${legacySpanishAsset}.svg`), svgBuffer);
      await sharp(svgBuffer).png({ compressionLevel: 9 }).toFile(path.join(publicRoot, `${legacySpanishAsset}.png`));
    }
  }
}

await mkdir(pwaIconRoot, { recursive: true });
const pwaIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><rect width="512" height="512" rx="64" fill="#F9FAFB"/><image href="${brandMarkData}" x="126" y="98" width="260" height="300"/></svg>`;
for (const size of [192, 512]) {
  await sharp(Buffer.from(pwaIconSvg)).resize(size, size).png({ compressionLevel: 9 }).toFile(path.join(pwaIconRoot, `pwa-${size}.png`));
}

console.log(`Generated ${locales.length * 10} localized Open Graph images and 2 PWA icons.`);
