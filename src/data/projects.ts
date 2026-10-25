export type ProjectCategory = 'personal' | 'client';
export type ProjectStatus = 'active' | 'archived';

export interface Project {
  title: string;
  year: number;
  category: ProjectCategory;
  slug: string;
  status?: ProjectStatus;
  description?: string;
  logo?: string;
  featured?: boolean;
}

// Catálogo y clasificación pública de qu4k3.com/proyectos.
export const projects: Project[] = [
  // Proyectos personales activos
  { title: 'Fibers v3', year: 2026, category: 'personal', status: 'active', slug: 'fibers', logo: 'fibers-cat.png' },
  { title: 'MEDI lens', year: 2025, category: 'personal', status: 'active', slug: 'medilens', logo: 'medilens-es.png', featured: true, description: 'Aplicación móvil y web para buscar o escanear medicamentos, organizar un botiquín digital y recibir avisos antes de su caducidad.' },
  { title: 'Pocket Link', year: 2025, category: 'personal', status: 'active', slug: 'pckt-link', logo: 'pckt-link.png', featured: true, description: 'Acortador de URLs con una API pública pensada para desarrolladores.' },
  { title: 'Qu4k3 v2', year: 2025, category: 'personal', status: 'active', slug: 'qu4k3', logo: 'qu4k3-com.png' },
  { title: 'Inefable', year: 2024, category: 'personal', status: 'active', slug: 'inefable', logo: 'inefable-day.png' },
  { title: 'Killing Floor Zone', year: 2023, category: 'personal', status: 'active', slug: 'killingfloor-zone', logo: 'killingfloor-zone.png' },
  { title: 'Disboard · Web', year: 2019, category: 'personal', status: 'active', slug: 'disboard-web', logo: 'disboard-team.png' },
  { title: 'Disboard · API', year: 2019, category: 'personal', status: 'active', slug: 'disboard-api', logo: 'api-disboard-team.png' },
  { title: 'Disboard · Documentación', year: 2019, category: 'personal', status: 'active', slug: 'disboard-docs', logo: 'docs-disboard-team.png' },
  { title: 'Disboard · Discord Bot', year: 2019, category: 'personal', status: 'active', slug: 'disboard-bot', logo: 'bot-disboard-team.png' },

  // Proyectos personales archivados
  { title: 'Fibers v2', year: 2022, category: 'personal', status: 'archived', slug: 'fibers', logo: 'fibers-cat.png' },
  { title: 'CEU Eventos', year: 2021, category: 'personal', status: 'archived', slug: 'ceu-events-scanner', logo: 'ceu-es.png' },
  { title: 'Anime Institute', year: 2018, category: 'personal', status: 'archived', slug: 'animeinstitute', logo: 'animeinstitute-net.png' },
  { title: 'NVersus', year: 2018, category: 'personal', status: 'archived', slug: 'nversus', logo: 'nversus-com.png' },
  { title: 'Discord Themes', year: 2018, category: 'personal', status: 'archived', slug: 'dthemes', logo: 'discordthemes-net.png' },
  { title: 'iForce Team', year: 2018, category: 'personal', status: 'archived', slug: 'iforce-team', logo: 'iceforce-team.png' },
  { title: 'Mario Kart · Discord Bot (Lakitu)', year: 2017, category: 'personal', status: 'archived', slug: 'mk-lakitu', logo: 'bot-mariokartworld-com.png' },
  { title: 'Mario Kart · Mario Kart World', year: 2017, category: 'personal', status: 'archived', slug: 'mk-mkw', logo: 'mariokartworld-com.png' },
  { title: 'Mario Kart · CEMK', year: 2017, category: 'personal', status: 'archived', slug: 'mk-cemk', logo: 'cemk-es.png' },
  { title: 'Mario Kart · FEMK', year: 2017, category: 'personal', status: 'archived', slug: 'mk-femk', logo: 'femk-es.png' },
  { title: 'Mario Kart · Torneo Interautonómico', year: 2017, category: 'personal', status: 'archived', slug: 'mk-torneo-interautonomico', logo: 'mariokartworld-com.png' },
  { title: 'Mario Kart · SNL', year: 2017, category: 'personal', status: 'archived', slug: 'mk-snl', logo: 'mariokartworld-com.png' },
  { title: 'MHW Guild', year: 2017, category: 'personal', status: 'archived', slug: 'mhw-guild', logo: 'mhwguild-com.png' },
  { title: 'Zerg Pulse', year: 2017, category: 'personal', status: 'archived', slug: 'zerg-pulse' },
  { title: 'Fibers v1', year: 2017, category: 'personal', status: 'archived', slug: 'fibers-v2017', logo: 'fibers-cat.png' },
  { title: 'Pong', year: 2017, category: 'personal', status: 'archived', slug: 'pong' },
  { title: 'Ecard Game', year: 2017, category: 'personal', status: 'archived', slug: 'ecard-game', logo: 'ecardgame-io.png' },
  { title: 'ASCII Art', year: 2017, category: 'personal', status: 'archived', slug: 'ascii-art', logo: 'asciiart-io.png' },
  { title: 'Qu4k3 v1', year: 2017, category: 'personal', status: 'archived', slug: 'qu4k3-v2017', logo: 'qu4k3-com.png' },
  { title: 'Fibers v0', year: 2016, category: 'personal', status: 'archived', slug: 'fibers-v2016', logo: 'fibers-cat.png' },
  { title: 'Kiznaiver', year: 2016, category: 'personal', status: 'archived', slug: 'kiznaiver', logo: 'kiznaiver-net.png' },
  { title: 'Qu4k3 v0', year: 2015, category: 'personal', status: 'archived', slug: 'qu4k3-v2015', logo: 'qu4k3-com.png' },

  // Proyectos para clientes
  { title: 'Kin Felina', year: 2026, category: 'client', slug: 'kinfelina', logo: 'kinfelina-org.png', featured: true, description: 'Sitio web para Kin Felina.' },
  { title: 'Finques Mireia', year: 2026, category: 'client', slug: 'finques-mireia', logo: 'finquesmireia-com.png', featured: true, description: 'Sitio web corporativo y catálogo inmobiliario centrado en las necesidades de las personas.' },
  { title: 'Iberia Estimulantes', year: 2026, category: 'client', slug: 'iberia-estimulantes', logo: 'iberiaestimulantes-com.png', featured: true, description: 'Sitio corporativo para presentar soluciones agrícolas especializadas y mejorar el desarrollo de los cultivos.' },
  { title: 'HUCA Constructora', year: 2025, category: 'client', slug: 'huca-constructora', logo: 'hucaconstructora-com.png', featured: true, description: 'Sitio web para una empresa constructora, con información de proyectos de construcción y reforma.' },
  { title: 'Tratar', year: 2024, category: 'client', slug: 'tratar', logo: 'cms-tratar-es.png' },
  { title: 'UAO App Eventos', year: 2021, category: 'client', slug: 'uao-app-events', logo: 'ceu-es.png' },
  { title: "L'Esmena", year: 2021, category: 'client', slug: 'esmena', logo: 'esmena-cat.png' },
  { title: 'Llibrenet', year: 2021, category: 'client', slug: 'llibrenet', logo: 'llibrenet-com.png' },
  { title: 'InOne', year: 2021, category: 'client', slug: 'inone', logo: 'inone-es.png' },
  { title: 'UAO Mailing Repository', year: 2020, category: 'client', slug: 'uao-mailing-repository', logo: 'ceu-es.png' },
  { title: 'Farell Editors', year: 2020, category: 'client', slug: 'farell-editors', logo: 'farelleditors-cat.png' },
  { title: 'Globalex', year: 2020, category: 'client', slug: 'globalex', logo: 'pmglobalex-com.png' },
  { title: 'LEI Network', year: 2020, category: 'client', slug: 'lei-network', logo: 'lei-network-com.png' },
  { title: 'JS Arquitecto', year: 2019, category: 'client', slug: 'js-arquitecto', logo: 'js-arquitecto-com.png' },
  { title: 'GoToikoncierge', year: 2019, category: 'client', slug: 'gotoikoncierge', logo: 'gotoikoncierge-com.png' },
  { title: 'Wanda T-shirt', year: 2019, category: 'client', slug: 'wanda-t-shirt', logo: 'lei-network-com.png' },
  { title: 'Clínica Abedent Podología', year: 2019, category: 'client', slug: 'clinica-abedent-podologia', logo: 'clinicaabedentpodologia-com.png' },
  { title: 'Liceo Francés de Barcelona (LFB)', year: 2018, category: 'client', slug: 'lfb', logo: 'lfb-es.png' },
  { title: 'iConcierge Red Carpet', year: 2018, category: 'client', slug: 'iconciergerc', logo: 'iconciergerc-com.png' },
  { title: "IBA · Panorama d'Art", year: 2016, category: 'client', slug: 'iba-panoramadart', logo: 'panoramadart-com.png' },
  { title: 'IBA · B151 Barcelona', year: 2016, category: 'client', slug: 'iba-b151-barcelona', logo: 'b151barcelona-com.png' },
  { title: 'IBA · Institut Barcelonès d’Art', year: 2016, category: 'client', slug: 'iba-institutbarcelonesdart', logo: 'iba-cat.png' },
  { title: 'Evoluginos', year: 2016, category: 'client', slug: 'evoluginos', logo: 'evoluginos-com.png' },
  { title: 'Marketplace Barcelona', year: 2016, category: 'client', slug: 'marketplace-barcelona', logo: 'marketplacebarcelona-com.png' },
  { title: 'KRN Accessories', year: 2016, category: 'client', slug: 'krn-accessories', logo: 'krnaccessories-com.png' },
  { title: 'Lovely Families', year: 2016, category: 'client', slug: 'lovelyfamilies', logo: 'lovelyfamilies-com.png' },
  { title: 'AccelGrow', year: 2016, category: 'client', slug: 'accelgrow', logo: 'accelgrow-com.png' },
  { title: 'Boostartup', year: 2016, category: 'client', slug: 'boostartup', logo: 'boostartup-es.png' },
  { title: 'Medical Nutribalance', year: 2015, category: 'client', slug: 'medical-nutribalance', logo: 'medicalnutribalance-com.png' },
];
