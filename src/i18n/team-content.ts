import type { Locale } from './routing';

export const teamContent: Record<Locale, {
  description: string;
  bio: string;
  role: string;
  disciplines: string[];
  specialties: string[];
  joseRole: string;
  felipeRole: string;
  contactAria: string;
}> = {
  es: {
    description: 'Conoce a Paul Guillamón, creador de Tau Studio, y su trayectoria en marketing, SEO, diseño y desarrollo web.',
    bio: 'Soy Paul Guillamón y en internet uso el alias Qu4k3. Soy desarrollador web con más de diez años de experiencia en marketing, SEO, diseño y desarrollo web y móvil. Desde 2019, doy forma a Tau Studio.',
    role: 'Desarrollador FullStack · Diseñador UX/UI',
    disciplines: ['Diseño UX/UI y accesibilidad', 'Maquetación responsive', 'Desarrollo web y móvil', 'WordPress, WooCommerce y webs multidioma', 'Migraciones web, correo y hosting', 'Marketing digital, redes y email', 'SEO técnico y local', 'Integraciones, reservas y pagos', 'Analítica, automatización y etiquetado', 'Hosting, CDN, seguridad y monitorización'],
    specialties: ['JavaScript / React', 'FullStack', 'Diseño UX/UI', 'Maquetación', 'React Native / Expo'],
    joseRole: 'Frontend React · Desarrollo móvil con React Native / Expo',
    felipeRole: 'Ingeniería de software sénior',
    contactAria: 'Contactar con Paul y Tau Studio',
  },
  en: {
    description: 'Meet Paul Guillamón, founder of Tau Studio, and learn about his experience in marketing, SEO, design and web development.',
    bio: 'I’m Paul Guillamón, and online I go by Qu4k3. I’m a web developer with over ten years of experience in marketing, SEO, design, and web and mobile development. I’ve been shaping Tau Studio since 2019.',
    role: 'Full-stack developer · UX/UI designer',
    disciplines: ['UX/UI design and accessibility', 'Responsive front-end development', 'Web and mobile development', 'WordPress, WooCommerce and multilingual sites', 'Website, email and hosting migrations', 'Digital marketing, social media and email', 'Technical and local SEO', 'Integrations, bookings and payments', 'Analytics, automation and tracking', 'Hosting, CDN, security and monitoring'],
    specialties: ['JavaScript / React', 'Full-stack', 'UX/UI design', 'Front-end development', 'React Native / Expo'],
    joseRole: 'React frontend · Mobile development with React Native / Expo',
    felipeRole: 'Senior software engineer',
    contactAria: 'Contact Paul and Tau Studio',
  },
  fr: {
    description: 'Découvrez Paul Guillamón, fondateur de Tau Studio, et son expérience en marketing, SEO, design et développement web.',
    bio: 'Je suis Paul Guillamón et, sur Internet, j’utilise le pseudonyme Qu4k3. Développeur web, j’ai plus de dix ans d’expérience en marketing, SEO, design et développement web et mobile. Depuis 2019, je façonne Tau Studio.',
    role: 'Développeur full-stack · Designer UX/UI',
    disciplines: ['Design UX/UI et accessibilité', 'Intégration responsive', 'Développement web et mobile', 'WordPress, WooCommerce et sites multilingues', 'Migration de sites, d’e-mails et d’hébergement', 'Marketing digital, réseaux sociaux et e-mail', 'SEO technique et local', 'Intégrations, réservations et paiements', 'Analyse, automatisation et suivi', 'Hébergement, CDN, sécurité et supervision'],
    specialties: ['JavaScript / React', 'Full-stack', 'Design UX/UI', 'Intégration web', 'React Native / Expo'],
    joseRole: 'Frontend React · Développement mobile avec React Native / Expo',
    felipeRole: 'Ingénieur logiciel senior',
    contactAria: 'Contacter Paul et Tau Studio',
  },
  ca: {
    description: 'Coneix en Paul Guillamón, creador de Tau Studio, i la seva trajectòria en màrqueting, SEO, disseny i desenvolupament web.',
    bio: 'Soc en Paul Guillamón i a internet faig servir l’àlies Qu4k3. Soc desenvolupador web amb més de deu anys d’experiència en màrqueting, SEO, disseny i desenvolupament web i mòbil. Des del 2019, dono forma a Tau Studio.',
    role: 'Desenvolupador FullStack · Dissenyador UX/UI',
    disciplines: ['Disseny UX/UI i accessibilitat', 'Maquetació responsive', 'Desenvolupament web i mòbil', 'WordPress, WooCommerce i webs multidioma', 'Migracions web, correu i hosting', 'Màrqueting digital, xarxes i correu', 'SEO tècnic i local', 'Integracions, reserves i pagaments', 'Analítica, automatització i etiquetatge', 'Hosting, CDN, seguretat i monitoratge'],
    specialties: ['JavaScript / React', 'FullStack', 'Disseny UX/UI', 'Maquetació', 'React Native / Expo'],
    joseRole: 'Frontend React · Desenvolupament mòbil amb React Native / Expo',
    felipeRole: 'Enginyer de programari sènior',
    contactAria: 'Contactar amb en Paul i Tau Studio',
  },
};
