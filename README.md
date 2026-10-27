[![Netlify Status](https://api.netlify.com/api/v1/badges/061d6f73-e0da-41c7-97bc-acc0004b02cb/deploy-status)](https://app.netlify.com/projects/tau-studio/deploys)

# Tau Studio

Sitio web de Tau Studio migrado a [Astro](https://astro.build/) (v7.4+), sin frameworks de UI, con entrega de contenido estático.

## Estructura

```
src/
  components/
  i18n/locales/
  layouts/
  pages/
  styles/
public/
  assets/projects/
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
npm run download:project-logos
npm run generate:og
```

### Sincronización de proyectos

- `npm run sync:projects`: descarga el catálogo de proyectos desde `qu4k3.com`, descarga los logos a `public/assets/projects/` con su nombre original cuando es único y regenera `src/data/projects.generated.json` con rutas locales.
- `npm run sync:projects:check`: ejecuta la misma sincronización en modo vista previa (`--dry-run`), mostrando cuántos proyectos se encontraron y si se conservan los destacados, sin modificar ningún archivo.
- `npm run download:project-logos`: descarga a disco local los logos que aún estén referenciados por URL remota en el JSON generado.
- `npm run generate:og`: regenera manualmente las imágenes Open Graph para los cuatro idiomas y los iconos PWA.

## MCP y skills

- MCP de documentación de Astro configurado en `opencode.json`.
- Skills de Astro instaladas en `.agents/skills/`.
