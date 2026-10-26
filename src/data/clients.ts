export interface Client {
  logo: string;
  task?: string;
  description: string;
}

export const clients: Client[] = [
  {
    logo: '/assets/img/clients/logo-inone.png',
    description: 'Marketing digital y gestión para clubes de golf.',
  },
  {
    logo: '/assets/img/clients/logo-uao-ceu.png',
    description: 'Universidad privada de Barcelona.',
  },
  {
    logo: '/assets/img/clients/transcontrol-logo.svg',
    description: 'Software de gestión para empresas de transporte.',
  },
  {
    logo: '/assets/img/clients/huca-logo.png',
    description: 'Constructora especializada en reformas y obra.',
  },
  {
    logo: '/assets/img/clients/WEB-Logo-Farell-Color.jpg',
    description: 'Editorial catalana de naturaleza, cultura e historia.',
  },
];
