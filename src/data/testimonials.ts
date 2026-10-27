import type { ImageMetadata } from 'astro';
import farellLogo from '@/assets/clients/WEB-Logo-Farell-Color.jpg';
import kinFelinaLogo from '@/assets/clients/kin-felina.jpeg';
import jsArquitectoLogo from '@/assets/clients/js-arquitecto-icon.jpeg';

export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  logo?: ImageMetadata;
  quoteLocale?: 'es' | 'en' | 'fr' | 'ca';
}

// Add only client-approved quotes here; this list is used for production builds.
export const testimonials: Testimonial[] = [
  {
    quote: 'Absoluta profesionalidad y una eficiencia que no deja de sorprender. Los problemas, resueltos en un par de clics; pero solo él sabe el trabajo que hay detrás.',
    name: 'José Sánchez',
    role: 'Gerente del estudio',
    company: 'JS Arquitecto',
    logo: jsArquitectoLogo,
    quoteLocale: 'es',
  },
  {
    quote: 'Estem molt contents de treballar amb el Paul. Sempre que ho hem necessitat ens ha donat solucions als problemes que ens han sorgit amb el web o el servidor.',
    name: 'Begonya Molins',
    role: 'Dissenyadora gràfica',
    company: 'Farell Editors',
    logo: farellLogo,
    quoteLocale: 'ca',
  },
  /*{
    quote: '',
    name: 'Silvana Castro Moreno',
    role: 'Presidenta',
    company: 'Kin Felina',
    logo: kinFelinaLogo,
    quoteLocale: 'es',
  },*/
];
