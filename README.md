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
```

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Variables de entorno

Copia `.env.example` a `.env` y completa las credenciales de Contentful:

```
PUBLIC_CONTENTFUL_SPACE_ID=
PUBLIC_CONTENTFUL_ACCESS_TOKEN=
```

## MCP y skills

- MCP de documentación de Astro configurado en `opencode.json`.
- Skills de Astro instaladas en `.agents/skills/`.