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
    description: 'Diseñamos sitios claros, accesibles y coherentes con la personalidad de tu marca.',
    detail: 'Experiencia · Identidad · Interfaz',
    intro: 'Diseñamos experiencias digitales fáciles de entender, agradables de usar y reconocibles como parte de tu marca.',
    capabilities: ['Arquitectura de información', 'Diseño UX/UI', 'Diseño responsive y accesible'],
  },
  {
    slug: 'desarrollo-web',
    number: '02',
    className: 'c2',
    title: 'Desarrollo web',
    headlineAccent: 'hecho para crecer.',
    description: 'Construimos experiencias rápidas, a medida y sencillas de mantener.',
    detail: 'Desarrollo · Integraciones · Rendimiento',
    intro: 'Convertimos el diseño y los objetivos del proyecto en una web rápida, fiable y preparada para crecer.',
    capabilities: ['Desarrollo a medida', 'CMS e integraciones', 'Rendimiento y mantenimiento'],
  },
  {
    slug: 'marketing-digital',
    number: '03',
    className: 'c3',
    title: 'Marketing digital',
    headlineAccent: 'con objetivos claros.',
    description: 'Conectamos tu propuesta con las personas adecuadas mediante una estrategia medible.',
    detail: 'Estrategia · Campañas · Analítica',
    intro: 'Creamos estrategias digitales que ayudan a llegar a la audiencia adecuada y a entender qué acciones generan resultados.',
    capabilities: ['Estrategia digital', 'Campañas y contenidos', 'Medición y optimización'],
  },
  {
    slug: 'seo',
    number: '04',
    className: 'c4',
    title: 'SEO',
    headlineAccent: 'para ganar visibilidad.',
    description: 'Mejoramos la visibilidad orgánica con una base técnica sólida y contenidos útiles.',
    detail: 'Auditoría · SEO técnico · Contenidos',
    intro: 'Trabajamos la visibilidad orgánica desde la parte técnica hasta el contenido, con prioridades claras y mejoras medibles.',
    capabilities: ['Auditoría y estrategia', 'SEO técnico', 'Optimización de contenidos'],
  },
];
