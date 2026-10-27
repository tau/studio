import { createHash } from 'node:crypto';
import { access, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SITE_URL = 'https://qu4k3.com';
const projectAssetsDirectory = path.resolve('public/assets/projects');

function remoteUrl(value) {
  if (!value) return null;
  if (value.startsWith('/assets/projects/')) return null;
  return new URL(value, SITE_URL).href;
}

function localPathFor(url) {
  const parsed = new URL(url);
  const originalName = decodeURIComponent(path.posix.basename(parsed.pathname));
  const extension = path.extname(originalName).toLowerCase() || '.img';
  const stem = path.basename(originalName, path.extname(originalName))
    .normalize('NFKD')
    .replace(/[^a-zA-Z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'project-logo';
  return { stem, extension, filename: `${stem}${extension}` };
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function download(url, publicPath) {
  const outputPath = path.join(projectAssetsDirectory, path.basename(publicPath));
  if (await exists(outputPath)) return;

  const response = await fetch(url, { headers: { 'user-agent': 'TauStudio-project-logo-sync/1.0' } });
  if (!response.ok) throw new Error(`No se pudo descargar el logo ${url} (${response.status})`);
  const contentType = response.headers.get('content-type') ?? '';
  if (!contentType.startsWith('image/')) throw new Error(`El recurso no parece una imagen (${contentType}): ${url}`);

  const bytes = Buffer.from(await response.arrayBuffer());
  if (!bytes.length) throw new Error(`El logo descargado está vacío: ${url}`);
  await mkdir(projectAssetsDirectory, { recursive: true });
  await writeFile(outputPath, bytes);
}

export async function downloadProjectLogos(projects) {
  const sourceUrls = [...new Set(projects.map((project) => remoteUrl(project.logo)).filter(Boolean))];
  const names = sourceUrls.map((url) => ({ url, ...localPathFor(url) }));
  const counts = new Map();
  for (const { filename } of names) counts.set(filename, (counts.get(filename) ?? 0) + 1);
  // Keep source basenames readable; add a short hash only if distinct URLs share a filename.
  const pathBySource = new Map(names.map(({ url, stem, extension, filename }) => {
    const uniqueFilename = counts.get(filename) > 1
      ? `${stem}-${createHash('sha256').update(url).digest('hex').slice(0, 10)}${extension}`
      : filename;
    return [url, `/assets/projects/${uniqueFilename}`];
  }));

  for (let index = 0; index < sourceUrls.length; index += 6) {
    await Promise.all(sourceUrls.slice(index, index + 6).map((url) => download(url, pathBySource.get(url))));
  }

  return projects.map((project) => {
    const source = remoteUrl(project.logo);
    return { ...project, logo: source ? pathBySource.get(source) : project.logo ?? null };
  });
}
