import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { downloadProjectLogos } from './project-logo-assets.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const projectsPath = path.join(root, 'src/data/projects.generated.json');
const projects = JSON.parse(await readFile(projectsPath, 'utf8'));
const projectsWithLocalLogos = await downloadProjectLogos(projects);
await writeFile(projectsPath, `${JSON.stringify(projectsWithLocalLogos, null, 2)}\n`, 'utf8');
console.log(`Logos de proyectos descargados a public/assets/projects (${projectsWithLocalLogos.length} proyectos revisados).`);
