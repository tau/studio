[![Netlify Status](https://api.netlify.com/api/v1/badges/061d6f73-e0da-41c7-97bc-acc0004b02cb/deploy-status)](https://app.netlify.com/projects/tau-studio/deploys)

# Tau Studio 

Sitio web de Tau Studio migrado a [Astro](https://astro.build/) (v7.4+), sin frameworks de UI, con entrega de contenido estático.

## Estructura

```
src/
  components/
  layouts/
  pages/
  styles/
public/
scripts/
```

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
npm run sync:projects
npm run sync:projects:check
```

### Sincronización de proyectos

- `npm run sync:projects`: descarga el catálogo de proyectos desde `qu4k3.com`, lo normaliza y regenera `src/data/projects.generated.json`, que alimenta la página `/proyectos`.
- `npm run sync:projects:check`: ejecuta la misma sincronización en modo vista previa (`--dry-run`), mostrando cuántos proyectos se encontraron y si se conservan los destacados, sin modificar ningún archivo.

## MCP y skills

- MCP de documentación de Astro configurado en `opencode.json`.
- Skills de Astro instaladas en `.agents/skills/`.