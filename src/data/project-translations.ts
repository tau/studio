import type { Locale } from '@/i18n/routing';
import type { Project } from './projects';

const featuredDescriptions: Record<string, Record<Exclude<Locale, 'es'>, string>> = {
  medilens: {
    en: 'Informational landing page for MEDI lens, a mobile app for viewing and managing medication information.',
    fr: 'Landing page informative pour MEDI lens, une application mobile de consultation et de gestion des informations sur les médicaments.',
    ca: 'Landing informativa per a MEDI lens, una aplicació mòbil per consultar i gestionar informació sobre medicaments.',
  },
  'pckt-link': {
    en: 'A new version of Pocket Link for saving, organising and sharing links through a simple web interface.',
    fr: 'Une nouvelle version de Pocket Link pour enregistrer, organiser et partager des liens dans une interface web simple.',
    ca: 'Nova versió de Pocket Link per desar, organitzar i compartir enllaços des d’una interfície web senzilla.',
  },
  kinfelina: {
    en: 'Website for Kin Felina.',
    fr: 'Site web de Kin Felina.',
    ca: 'Lloc web per a Kin Felina.',
  },
  'finques-mireia': {
    en: 'Corporate website and property catalogue for Finques Mireia, a real estate agency focused on people’s needs.',
    fr: 'Site institutionnel et catalogue immobilier pour Finques Mireia, une agence attentive aux besoins des personnes.',
    ca: 'Web corporativa i catàleg immobiliari per a Finques Mireia, una immobiliària centrada en les necessitats de les persones.',
  },
  'iberia-estimulantes': {
    en: 'Corporate website presenting specialist agricultural solutions to improve crop performance, quality and growth.',
    fr: 'Site institutionnel présentant des solutions agricoles spécialisées pour améliorer le rendement, la qualité et le développement des cultures.',
    ca: 'Web corporativa per presentar solucions agrícoles especialitzades que milloren el rendiment, la qualitat i el desenvolupament dels cultius.',
  },
  'huca-constructora': {
    en: 'Website for a construction company, featuring its building and renovation projects.',
    fr: 'Site web d’une entreprise de construction présentant ses projets de construction et de rénovation.',
    ca: 'Lloc web d’una empresa constructora amb informació dels seus projectes de construcció i reforma.',
  },
};

export function localizedProjectDescription(project: Project, locale: Locale): string {
  if (locale === 'es') return project.description;
  return featuredDescriptions[project.slug]?.[locale] ?? project.description;
}
