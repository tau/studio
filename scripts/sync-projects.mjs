import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const SITE_URL = 'https://qu4k3.com';
const PROJECTS_URL = `${SITE_URL}/proyectos`;
const root = fileURLToPath(new URL('../', import.meta.url));
const outputPath = path.join(root, 'src/data/projects.generated.json');
const overridesPath = path.join(root, 'src/data/project-overrides.json');
const dryRun = process.argv.includes('--dry-run');

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { 'user-agent': 'TauStudio-project-sync/1.0' },
  });

  if (!response.ok) {
    throw new Error(`No se pudo descargar ${url} (${response.status} ${response.statusText})`);
  }

  return response.text();
}

function findProjectsModule(html) {
  for (const [tag] of html.matchAll(/<link\b[^>]*>/gi)) {
    const relation = tag.match(/\brel=["']([^"']+)["']/i)?.[1];
    const href = tag.match(/\bhref=["']([^"']+)["']/i)?.[1];

    if (relation?.split(/\s+/).includes('modulepreload') && href?.includes('proyectos.md.') && href.endsWith('.lean.js')) {
      return new URL(href, SITE_URL).href;
    }
  }

  throw new Error('No se encontró el módulo de datos de proyectos en la página de qu4k3.com.');
}

function extractArrayLiteral(source) {
  const assignment = source.match(/(?:const\s+|,)S\s*=/);
  if (!assignment) throw new Error('No se encontró el catálogo de proyectos en el módulo descargado.');

  const start = source.indexOf('[', assignment.index + assignment[0].length);
  if (start < 0) throw new Error('No se encontró el inicio del catálogo de proyectos.');

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let index = start; index < source.length; index += 1) {
    const char = source[index];

    if (inString) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === '"') inString = false;
      continue;
    }

    if (char === '"') inString = true;
    else if (char === '[') depth += 1;
    else if (char === ']') {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }

  throw new Error('El catálogo de proyectos está incompleto o tiene un formato inesperado.');
}

function quoteObjectKeys(literal) {
  let result = '';
  let inString = false;
  let escaped = false;

  for (let index = 0; index < literal.length;) {
    const char = literal[index];

    if (inString) {
      result += char;
      index += 1;
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === '"') inString = false;
      continue;
    }

    if (char === '"') {
      inString = true;
      result += char;
      index += 1;
      continue;
    }

    if (/[A-Za-z_$]/.test(char)) {
      const end = literal.slice(index).match(/^[A-Za-z_$][\w$]*/)[0].length + index;
      const identifier = literal.slice(index, end);
      let lookahead = end;
      while (/\s/.test(literal[lookahead] ?? '')) lookahead += 1;

      if (literal[lookahead] === ':') result += `"${identifier}"`;
      else result += identifier;
      index = end;
      continue;
    }

    result += char;
    index += 1;
  }

  return result;
}

function parseSourceProjects(moduleSource) {
  const arrayLiteral = extractArrayLiteral(moduleSource);
  let data;

  try {
    data = JSON.parse(quoteObjectKeys(arrayLiteral));
  } catch (error) {
    throw new Error(`No se pudo interpretar el catálogo del módulo de qu4k3.com: ${error.message}`);
  }

  if (!Array.isArray(data) || data.length === 0) {
    throw new Error('El módulo no contiene una lista de proyectos válida.');
  }

  return data;
}

function normalizeProject(project, featuredKeys) {
  const categoryByType = {
    personal: 'personal',
    cliente: 'client',
    otros: 'other',
  };
  const category = categoryByType[project.type];
  const slug = project.link?.split('/').filter(Boolean).at(-1);
  const year = Number(project.yearStart || project.yearPublished || project.yearEnd);

  if (!category || !project.title || !slug || !Number.isFinite(year)) {
    throw new Error(`Proyecto incompleto o con campos desconocidos: ${JSON.stringify(project)}`);
  }

  const key = `${slug}::${project.title}`;

  return {
    key,
    title: project.title,
    year,
    yearStart: project.yearStart ? Number(project.yearStart) : null,
    yearEnd: project.yearEnd ? Number(project.yearEnd) : null,
    category,
    status: project.status === 'En Desarrollo' && !project.yearEnd ? 'active' : 'archived',
    statusLabel: project.status || '',
    slug,
    description: project.description || '',
    logo: project.favicon ? new URL(project.favicon, SITE_URL).href : null,
    sourceUrl: new URL(project.link, SITE_URL).href,
    liveUrl: project.url || '',
    githubUrl: project.github || '',
    tech: Array.isArray(project.tech) ? project.tech : [],
    featured: featuredKeys.has(key),
  };
}

function sourceSlug(project) {
  return project.link?.split('/').filter(Boolean).at(-1);
}

function curatedProject(entry, category, sourceProject, featuredKeys) {
  const sourceData = sourceProject ? normalizeProject(sourceProject, new Set()) : null;
  const key = `${entry.slug}::${entry.title}`;
  const status = entry.status ?? 'archived';

  return {
    ...sourceData,
    key,
    title: entry.title,
    year: sourceData?.year ?? entry.year,
    yearStart: sourceData?.yearStart ?? entry.year,
    yearEnd: sourceData?.yearEnd ?? null,
    category,
    status,
    statusLabel: category === 'personal'
      ? status === 'active' ? 'Activo' : 'Archivado'
      : sourceData?.statusLabel || 'Finalizado',
    slug: entry.slug,
    description: sourceData?.description || entry.description || '',
    logo: entry.logo ? new URL(`/assets/img/favicons/${entry.logo}`, SITE_URL).href : sourceData?.logo ?? null,
    sourceUrl: sourceData?.sourceUrl ?? new URL(`/proyecto/${entry.slug}`, SITE_URL).href,
    liveUrl: sourceData?.liveUrl ?? '',
    githubUrl: sourceData?.githubUrl ?? '',
    tech: sourceData?.tech ?? [],
    featured: featuredKeys.has(key),
  };
}

try {
  const overrides = JSON.parse(await readFile(overridesPath, 'utf8'));
  const featuredKeys = new Set(overrides.featured ?? []);
  const html = await fetchText(PROJECTS_URL);
  const moduleUrl = findProjectsModule(html);
  const moduleSource = await fetchText(moduleUrl);
  const sourceProjects = parseSourceProjects(moduleSource);
  const curatedPersonal = overrides.personalCatalog.map((entry) => {
    const sourceTitle = entry.sourceTitle ?? entry.title;
    const sourceProject = sourceProjects.find((project) =>
      project.title === sourceTitle && sourceSlug(project) === entry.slug,
    );

    return curatedProject(entry, 'personal', sourceProject, featuredKeys);
  });
  const curatedPersonalSlugs = new Set(overrides.personalCatalog.map((entry) => entry.slug));
  const additionalSourceProjects = sourceProjects
    .filter((project) => !curatedPersonalSlugs.has(sourceSlug(project)))
    .filter((project) => project.type !== 'cliente')
    .map((project) => normalizeProject(project, featuredKeys));
  const clientSlugs = new Set(sourceProjects.filter((project) => project.type === 'cliente').map(sourceSlug));
  const additionalClients = overrides.additionalClients
    .filter((entry) => !clientSlugs.has(entry.slug))
    .map((entry) => curatedProject(entry, 'client', null, featuredKeys));
  const normalizedProjects = [
    ...curatedPersonal,
    ...sourceProjects
      .filter((project) => project.type === 'cliente')
      .map((project) => normalizeProject(project, featuredKeys)),
    ...additionalClients,
    ...additionalSourceProjects,
  ];
  const foundFeaturedKeys = new Set(normalizedProjects.filter((project) => project.featured).map((project) => project.key));
  const missingFeatured = [...featuredKeys].filter((key) => !foundFeaturedKeys.has(key));
  const counts = normalizedProjects.reduce((total, project) => {
    total[project.category] = (total[project.category] ?? 0) + 1;
    return total;
  }, {});

  console.log(`Fuente: ${PROJECTS_URL}`);
  console.log(`Módulo detectado: ${moduleUrl}`);
  console.log(`Proyectos encontrados: ${normalizedProjects.length} (${Object.entries(counts).map(([key, value]) => `${key}: ${value}`).join(', ')})`);
  console.log(`Destacados conservados: ${foundFeaturedKeys.size}/${featuredKeys.size}`);
  if (missingFeatured.length) console.warn(`No se encontraron estas claves destacadas: ${missingFeatured.join(', ')}`);

  if (dryRun) {
    console.log('Vista previa: no se ha modificado ningún archivo.');
  } else {
    await writeFile(outputPath, `${JSON.stringify(normalizedProjects, null, 2)}\n`, 'utf8');
    console.log(`Catálogo actualizado: ${path.relative(root, outputPath)}`);
  }
} catch (error) {
  console.error(`Error al sincronizar proyectos: ${error.message}`);
  process.exitCode = 1;
}
