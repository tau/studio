import { getRelativeLocaleUrl } from 'astro:i18n';

export const locales = ['es', 'en', 'fr', 'ca'] as const;
export type Locale = (typeof locales)[number];
export type PageRoute = 'home' | 'services' | 'projects' | 'team' | 'contact';

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
  ca: 'Català',
};

const pageSlugs: Record<Locale, Record<Exclude<PageRoute, 'home'>, string>> = {
  es: { services: 'servicios', projects: 'proyectos', team: 'equipo', contact: 'contacto' },
  en: { services: 'services', projects: 'projects', team: 'team', contact: 'contact' },
  fr: { services: 'services', projects: 'projets', team: 'equipe', contact: 'contact' },
  ca: { services: 'serveis', projects: 'projectes', team: 'equip', contact: 'contacte' },
};

export const serviceSlugs: Record<Locale, Record<string, string>> = {
  es: {
    'diseno-web': 'diseno-web',
    'desarrollo-web': 'desarrollo-web',
    'marketing-digital': 'marketing-digital',
    seo: 'seo',
    'migraciones-y-mantenimiento': 'migraciones-y-mantenimiento',
  },
  en: {
    'diseno-web': 'web-design',
    'desarrollo-web': 'web-development',
    'marketing-digital': 'digital-marketing',
    seo: 'seo',
    'migraciones-y-mantenimiento': 'migrations-and-maintenance',
  },
  fr: {
    'diseno-web': 'conception-web',
    'desarrollo-web': 'developpement-web',
    'marketing-digital': 'marketing-digital',
    seo: 'seo',
    'migraciones-y-mantenimiento': 'migrations-et-maintenance',
  },
  ca: {
    'diseno-web': 'disseny-web',
    'desarrollo-web': 'desenvolupament-web',
    'marketing-digital': 'marketing-digital',
    seo: 'seo',
    'migraciones-y-mantenimiento': 'migracions-i-manteniment',
  },
};

export function asLocale(value: string | undefined): Locale {
  return locales.includes(value as Locale) ? (value as Locale) : 'es';
}

export function localeFromPath(pathname: string): Locale {
  return asLocale(pathname.split('/').filter(Boolean)[0]);
}

export function localizedPagePath(locale: Locale, page: PageRoute): string {
  if (page === 'home') return getRelativeLocaleUrl(locale, '');
  return getRelativeLocaleUrl(locale, pageSlugs[locale][page]);
}

export function localizedServicePath(locale: Locale, canonicalSlug: string): string {
  const serviceSlug = serviceSlugs[locale][canonicalSlug] ?? canonicalSlug;
  return `${localizedPagePath(locale, 'services')}/${serviceSlug}`;
}

export function localizedPathForLocale(pathname: string, targetLocale: Locale): string {
  const sourceLocale = localeFromPath(pathname);
  const segments = pathname.split('/').filter(Boolean);
  const pathSegments = locales.includes(segments[0] as Locale) ? segments.slice(1) : segments;

  if (pathSegments.length === 0) return localizedPagePath(targetLocale, 'home');

  const currentPage = Object.entries(pageSlugs[sourceLocale]).find(([, slug]) => slug === pathSegments[0]);
  if (currentPage) {
    const [page] = currentPage as [Exclude<PageRoute, 'home'>, string];
    if (page === 'services' && pathSegments[1]) {
      const canonicalService = Object.entries(serviceSlugs[sourceLocale])
        .find(([, slug]) => slug === pathSegments[1])?.[0];
      return canonicalService
        ? localizedServicePath(targetLocale, canonicalService)
        : localizedPagePath(targetLocale, 'services');
    }
    return localizedPagePath(targetLocale, page);
  }

  return localizedPagePath(targetLocale, 'home');
}
