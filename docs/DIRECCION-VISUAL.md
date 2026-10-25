# Dirección visual — Tau Studio

Guía para mantener coherencia con el lenguaje visual aplicado al layout, la navegación móvil, Contacto y los enlaces del pie.

## Idea central

Una estética editorial y geométrica inspirada en las tarjetas de Tau Studio: composición ordenada, líneas finas, cuadrículas, numeración y pequeños acentos de color. La marca aparece en detalles; el contenido sigue siendo lo más importante.

## Reglas visuales

- **Sin gradientes ni desenfoques.** Usar colores planos, transparencias discretas y bordes de 1 px.
- **Decoración contenida.** Retícula de baja opacidad, patrones pequeños y marcas cuadradas en intersecciones; no competir con texto, imágenes o controles.
- **Geometría antes que efectos.** Preferir líneas, marcos, separadores, cuadrados y alineaciones precisas a brillos, sombras fuertes o formas difusas.
- **Movimiento funcional.** Transiciones breves para color, borde o iconos. Evitar desplazamientos verticales como respuesta de hover, especialmente en controles móviles.
- **Fondos transparentes cuando ayuden a integrar.** No añadir paneles de fondo por defecto; reservarlos para zonas que necesiten jerarquía o separación, como el formulario.

## Paleta

Los valores base se definen en `src/styles/_variables.scss`:

| Uso | Variable | Valor |
| --- | --- | --- |
| Tinta principal | `$base-color` | `#111827` |
| Morado | `$color1` | `#6853A2` |
| Rosa | `$color2` | `#EC1978` |
| Verde | `$color3` | `#5ABE93` |
| Amarillo | `$color4` | `#FBAF18` |
| Fondo claro | `$background-light` | `#F9FAFB` |
| Fondo alternativo | `$background-regular` | `#F3F4F6` |

Usar la tinta para texto y estructura. Aplicar los cuatro colores de marca en puntos pequeños: marcadores, números, reglas o indicadores. Para texto pequeño, oscurecer los tonos claros hasta conseguir contraste suficiente.

Cada página puede tener un color de acento propio: Servicios usa `$color1`, Equipo `$color3` y Contacto `$color4`. Mantener ese color en sus marcadores, flechas, focos y estados de hover.

En la home, el hero, la sección de clientes y la sección de proyectos reciben colores distintos, elegidos al azar sin repetir entre sí en cada carga. Dentro de cada bloque, el marcador, el texto destacado y las interacciones comparten el mismo acento. Si el script no se ejecuta, los bloques parten del color base `#111827`.

## Retícula y detalles

- Las líneas de fondo viven en `src/layouts/BaseLayout.astro`; son fijas, no interactivas y van detrás del contenido.
- Mantenerlas muy tenues (aprox. 4–6 % de opacidad). En móvil, reducir la cantidad de guías para no cargar la pantalla.
- Los patrones se construyen con elementos cuadrados explícitos, no con imágenes grandes ni con fondos generativos.
- Usar marcas de color de unos pocos píxeles en cruces o esquinas, con una función de ritmo visual y no como decoración dominante.
- Para paneles y tarjetas: borde fino, esquina recta o con radio mínimo, sombra leve solo cuando ayude a separar capas.

## Tipografía y composición

- La tipografía del sitio es Poppins, con pesos 300, 500 y 600 cargados desde `BaseLayout.astro`.
- Cargar solo el subconjunto Latin utilizado y precargar los tres WOFF2 desde el `<head>` para reducir el cambio visual al entrar la página.
- Usar pesos ligeros para texto corrido y 500/600 para títulos, navegación y controles.
- Crear jerarquía con escala, espaciado, alineación, mayúsculas pequeñas y numeración; evitar añadir adornos tipográficos innecesarios.
- Dar aire al contenido y limitar el ancho de lectura. En móvil, apilar columnas y mantener márgenes táctiles cómodos.

## Navegación móvil

- El botón del menú se posiciona respecto a `nav__wrapper`, no respecto a la ventana.
- Debe ser un botón real, con `aria-controls`, `aria-expanded`, nombre accesible actualizado y foco visible.
- El panel abierto puede ocupar casi toda la pantalla, con fondo sólido, borde sutil y scroll propio si el alto disponible es limitado.
- Los enlaces se presentan como filas amplias, separadas por líneas; pueden incluir numeración y un pequeño acento de color.
- Mantener el área interactiva generosa y evitar depender de hover para comunicar información.

## Cabecera y navegación principal

- El hero de inicio combina una frase principal clara, una llamada a la acción y un índice de servicios en cuadrícula.
- Usar un marcador amarillo para el eyebrow, morado para destacar una parte del titular y tinta oscura para la acción principal.
- La navegación mantiene el logo a la izquierda y enlaces sencillos a la derecha; una regla fina la separa del contenido.
- Mostrar la página activa con peso tipográfico y una línea de color, no con una pastilla o fondo saturado.
- Los enlaces a secciones usan anclas reales; no depender de JavaScript para navegar al contenido.

## Formularios y contacto

- Priorizar etiquetas visibles y claras, campos cómodos, foco evidente y errores asociados a cada campo.
- Agrupar campos relacionados en una cuadrícula de dos columnas en escritorio y una columna en móvil.
- Usar paneles sobrios para organizar el formulario, con un único detalle de color como regla o marca.
- Mantener acciones principales de alto contraste y estados visibles para foco, envío y error.
- La información de contacto debe presentarse como enlaces directos (`mailto:` y `tel:`) y separarse con líneas, no con bloques de color grandes.

## Presentación de clientes

- Introducir la cuadrícula con un título editorial y una explicación breve, sin convertirla en otra portada.
- Dar a los logos el mismo peso en tarjetas horizontales de borde fino y fondo apenas visible.
- Mantener las marcas en escala de grises y reducir su opacidad; recuperar algo de presencia con hover, sin mover la tarjeta.
- Usar una cuadrícula responsive de dos columnas en móvil y más columnas en pantallas amplias.

## Enlaces de navegación del pie

- Tratar `FooterNav` como una continuación de la página, no como un segundo footer pesado.
- Usar tarjetas ligeras en una cuadrícula responsive, con número, título, descripción breve y flecha.
- Evitar fondos saturados y texto vertical; conservar los colores de marca en los números o marcas pequeñas.
- El fondo del `<footer>` principal permanece transparente para dejar visible el lenguaje del layout.
- El footer principal mantiene una regla superior, marca y descripción a un lado, redes sociales en controles cuadrados y una fila final con email, copyright y enlace para volver arriba.
- Los estados de hover se limitan a cambios de color y borde; evitar desplazar iconos o controles verticalmente.

## Accesibilidad y calidad

- Mantener HTML semántico, nombres accesibles, foco visible y contraste legible.
- Marcar como decorativos los patrones e iconos que no aporten información (`aria-hidden="true"`).
- Respetar los atributos de estado (`aria-expanded`, `aria-invalid`) y asociar errores con `aria-describedby`.
- Verificar el resultado en móvil y escritorio; ejecutar `npm run build` después de cambios de estructura o estilos.

## Referencias en el proyecto

- `src/layouts/BaseLayout.astro`: retícula y marcas del fondo.
- `src/styles/_variables.scss`: colores y transiciones base.
- `src/styles/main.scss`: navegación, panel móvil, hero, clientes, contacto y tarjetas de `FooterNav`.
- `src/pages/contacto.astro` y `src/components/ContactForm.astro`: composición y formulario de contacto.
- `src/components/shared/FooterNav.astro`: enlaces de navegación complementaria.
- `src/components/shared/Header.astro`: hero de inicio e índice de servicios.
- `src/components/shared/Clients.astro` y `Square.astro`: presentación y logos de clientes.
- `src/components/shared/FeaturedProjects.astro` y `src/data/projects.ts`: selección de proyectos para la home y catálogo.
- `src/pages/proyectos.astro`: catálogo agrupado por tipo, estado y año.
- `src/pages/servicios.astro`: detalle de servicios y tarjetas numeradas.
- `src/pages/equipo.astro`: perfil de Paul Guillamón y su trayectoria.
- `src/pages/404.astro`: página de error con retícula y rutas de salida.
- `src/components/shared/Nav.astro`: navegación principal y menú móvil.
- `src/components/shared/Footer.astro`: marca, redes sociales e información legal.
