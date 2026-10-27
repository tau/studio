export interface StudioService {
  slug: string;
  number: string;
  className: string;
  title: string;
  headlineAccent: string;
  description: string;
  detail: string;
  intro: string;
  capabilities: string[];
}

export const services: StudioService[] = [
  {
    slug: 'diseno-web',
    number: '01',
    className: 'c1',
    title: 'Diseño web',
    headlineAccent: 'que conecta.',
    description: 'Diseñamos experiencias claras, accesibles y coherentes con la personalidad de tu marca.',
    detail: 'UX/UI · Accesibilidad · Interfaz',
    intro: 'Diseñamos experiencias digitales fáciles de entender, agradables de usar y reconocibles como parte de tu marca.',
    capabilities: ['Arquitectura de información', 'Diseño UX/UI con Figma y Adobe XD', 'Diseño responsive, accesible y multidioma'],
  },
  {
    slug: 'desarrollo-web',
    number: '02',
    className: 'c2',
    title: 'Desarrollo web',
    headlineAccent: 'hecho para crecer.',
    description: 'Creamos webs, tiendas y landing pages rápidas, a medida e integradas con tus herramientas.',
    detail: 'WordPress · E-commerce · Integraciones',
    intro: 'Desarrollamos sitios web, tiendas online y landing pages conectadas con las herramientas y servicios que necesita tu proyecto.',
    capabilities: [
      'WordPress, WooCommerce y sitios web multidioma',
      'Landing pages, APIs, reservas online y pasarelas de pago',
      'Despliegues automatizados con CI/CD',
    ],
  },
  {
    slug: 'marketing-digital',
    number: '03',
    className: 'c3',
    title: 'Marketing digital',
    headlineAccent: 'con objetivos claros.',
    description: 'Conectamos tu marca con las personas adecuadas mediante redes, email y medición.',
    detail: 'Redes · Email MJML · Analítica',
    intro: 'Conectamos canales y automatizamos tareas para que puedas comunicarte con tu audiencia y entender qué acciones generan resultados.',
    capabilities: [
      'Integración de redes sociales y publicación automática',
      'Diseño y maquetación responsive de emails con MJML',
      'Email marketing, automatizaciones y entregabilidad (SPF, DKIM y DMARC)',
      'Analítica con Google Analytics, Matomo o Umami',
      'Etiquetado con Google Tag Manager y gestión del consentimiento',
    ],
  },
  {
    slug: 'seo',
    number: '04',
    className: 'c4',
    title: 'SEO',
    headlineAccent: 'para ganar visibilidad.',
    description: 'Mejoramos la visibilidad orgánica y el rendimiento técnico con mejoras medibles.',
    detail: 'SEO técnico · Velocidad · Metadatos',
    intro: 'Trabajamos la visibilidad orgánica desde la parte técnica hasta el contenido y la velocidad, con prioridades claras y mejoras medibles.',
    capabilities: [
      'Auditoría, estrategia SEO y optimización de contenidos',
      'SEO técnico, SEO local y Google Search Console',
      'Rendimiento web y PageSpeed Insights',
      'Metadatos Open Graph para compartir en redes sociales',
    ],
  },
  {
    slug: 'migraciones-y-mantenimiento',
    number: '05',
    className: 'c1',
    title: 'Migraciones y mantenimiento',
    headlineAccent: 'sin perder el control.',
    description: 'Trasladamos tu web y cuidamos de su seguridad, disponibilidad y mantenimiento técnico.',
    detail: 'Migraciones · Hosting · Soporte',
    intro: 'Nos ocupamos del traslado de tu web, hosting, dominios y correo, y del mantenimiento necesario para que todo siga funcionando.',
    capabilities: [
      'Migraciones desde constructores web como Moninalia y otras plataformas',
      'Traslado y configuración de hosting, dominios, DNS y correo empresarial',
      'Mantenimiento de WordPress, actualizaciones y certificados SSL',
      'Copias de seguridad, seguridad web y recuperación ante fallos',
      'Cloudflare, CDN, monitorización y gestión de caídas',
    ],
  },
];
