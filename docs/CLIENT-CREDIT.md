# Crédito "Desarrollado por Tau Studio" en footers de clientes

Objetivo: añadir en el footer de cada sitio de cliente un enlace `<a>` con el logo de Tau Studio, de forma consistente y actualizable.

## Opción 1 — Snippet HTML estático (recomendado para sitios no Astro)

Pega esto en el footer de cada cliente (ajusta estilos si hace falta):

```html
<a href="https://tau.studio" target="_blank" rel="noopener noreferrer" aria-label="Desarrollado por Tau Studio"
   style="display:inline-flex;align-items:center;gap:.45rem;font-size:.8125rem;font-weight:500;text-decoration:none;color:inherit;opacity:.65;">
  <img src="https://tau.studio/tau.svg" alt="Tau Studio" width="18" height="18" loading="lazy" decoding="async" />
  <span>Desarrollado por Tau Studio</span>
</a>
```

Ventajas: cero dependencias, funciona en cualquier CMS/HTML. Desventaja: si cambias el texto o el logo, hay que actualizar cada sitio.

## Opción 2 — Script centralizado (un solo punto de actualización)

En cada sitio de cliente, añade una sola línea antes de `</body>`:

```html
<script src="https://tau.studio/credit/tau-credit.js" defer></script>
```

El script:
- Inyecta los estilos una sola vez.
- Si existe un contenedor `<div data-tau-credit></div>`, coloca el badge ahí.
- Si no, lo añade al final del `<footer>`.
- Si no hay footer, lo añade al final del body.

Para posicionarlo exactamente, pon el contenedor donde quieras:

```html
<footer>
  ...
  <div data-tau-credit></div>
</footer>
```

Ventaja: actualizas `public/credit/tau-credit.js` en este repo y todos los clientes reciben el cambio al siguiente deploy.

## Opción 3 — Componente Astro (clientes que son proyectos Astro propios)

Copia/importa `src/components/shared/ClientCredit.astro` y úsalo en el footer:

```astro
---
import ClientCredit from '@/components/shared/ClientCredit.astro';
---
<footer>
  ...
  <ClientCredit />
</footer>
```

Props opcionales: `href`, `label`, `class`.

## Accesibilidad y buenas prácticas

- `rel="noopener noreferrer"` siempre que se use `target="_blank"`.
- `aria-label` descriptivo en el enlace.
- `alt` en la imagen (o `alt=""` si el texto adyacente ya describe el logo; aquí se usa `alt="Tau Studio"`).
- `loading="lazy"` y `decoding="async"` para no bloquear el render.
- Tamaño fijo (18×18) para evitar CLS.
- Opacidad reducida por defecto y hover al 100% para no competir con el contenido del cliente.
- No añadir `target="_blank"` si prefieres navegación en la misma pestaña (cambia a sin target).

## Notas

- El logo servido es `https://tau.studio/tau.svg`. Si el cliente bloquea recursos externos, descarga `tau.svg` a su propio `public/` y ajusta la `src`.
- Evita usar el badge en sitios donde el cliente no lo haya autorizado por contrato.
