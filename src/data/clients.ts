import type { ImageMetadata } from 'astro';
import hucaLogo from '@/assets/clients/huca-logo.png';
import inOneLogo from '@/assets/clients/logo-inone.png';
import uaoLogo from '@/assets/clients/logo-uao-ceu.png';
import transcontrolLogo from '@/assets/clients/transcontrol-logo.svg';
import farellLogo from '@/assets/clients/WEB-Logo-Farell-Color.jpg';

export interface Client {
  logo: ImageMetadata;
  task?: string;
  description: string;
}

export const clients: Client[] = [
  {
    logo: inOneLogo,
    description: 'Marketing digital y gestión para clubes de golf.',
  },
  {
    logo: uaoLogo,
    description: 'Universidad privada de Barcelona.',
  },
  {
    logo: transcontrolLogo,
    description: 'Software de gestión para empresas de transporte.',
  },
  {
    logo: hucaLogo,
    description: 'Constructora especializada en reformas y obra.',
  },
  {
    logo: farellLogo,
    description: 'Editorial catalana de naturaleza, cultura e historia.',
  },
];
