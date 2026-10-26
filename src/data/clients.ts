import type { ImageMetadata } from 'astro';
import hucaLogo from '@/assets/clients/huca-logo.png';
import inOneLogo from '@/assets/clients/logo-inone.png';
import uaoLogo from '@/assets/clients/logo-uao-ceu.png';
import transcontrolLogo from '@/assets/clients/transcontrol-logo.svg';
import farellLogo from '@/assets/clients/WEB-Logo-Farell-Color.jpg';
import accelLogo from '@/assets/clients/accel-logo.png';
import abedentLogo from '@/assets/clients/abedent-logo.png';
import lfbLogo from '@/assets/clients/lfb-logo.png';
import kinFelinaLogo from '@/assets/clients/kin-felina.jpeg';
import jsArquitectoLogo from '@/assets/clients/js-arquitecto.png';
import finquesMireiaLogo from '@/assets/clients/finques-mireia.svg';

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
  {
    logo: accelLogo,
    description: 'Plataforma de crecimiento para startups.',
  },
  {
    logo: abedentLogo,
    description: 'Clínica de podología y salud del pie.',
  },
  {
    logo: lfbLogo,
    description: 'Servicios y soluciones para empresas.',
  },
  {
    logo: kinFelinaLogo,
    description: 'Asociación dedicada al cuidado ético de colonias felinas en Sorbas.',
  },
  {
    logo: jsArquitectoLogo,
    description: 'Estudio de arquitectura dirigido por José Sánchez.',
  },
  {
    logo: finquesMireiaLogo,
    description: 'Inmobiliaria centrada en las necesidades de las personas.',
  },
];
