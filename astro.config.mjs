import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import path from 'node:path';

const locales = ['es', 'en', 'fr', 'ca'];
const localeTags = { es: 'es-ES', en: 'en', fr: 'fr-FR', ca: 'ca-ES' };
const pageSlugs = {
  es: { services: 'servicios', projects: 'proyectos', team: 'equipo', contact: 'contacto', legalNotice: 'aviso-legal', privacy: 'privacidad' },
  en: { services: 'services', projects: 'projects', team: 'team', contact: 'contact', legalNotice: 'legal-notice', privacy: 'privacy-policy' },
  fr: { services: 'services', projects: 'projets', team: 'equipe', contact: 'contact', legalNotice: 'mentions-legales', privacy: 'politique-confidentialite' },
  ca: { services: 'serveis', projects: 'projectes', team: 'equip', contact: 'contacte', legalNotice: 'avis-legal', privacy: 'politica-privacitat' },
};
const serviceSlugs = {
  es: { 'diseno-web': 'diseno-web', 'desarrollo-web': 'desarrollo-web', 'marketing-digital': 'marketing-digital', seo: 'seo', 'migraciones-y-mantenimiento': 'migraciones-y-mantenimiento' },
  en: { 'diseno-web': 'web-design', 'desarrollo-web': 'web-development', 'marketing-digital': 'digital-marketing', seo: 'seo', 'migraciones-y-mantenimiento': 'migrations-and-maintenance' },
  fr: { 'diseno-web': 'conception-web', 'desarrollo-web': 'developpement-web', 'marketing-digital': 'marketing-digital', seo: 'seo', 'migraciones-y-mantenimiento': 'migrations-et-maintenance' },
  ca: { 'diseno-web': 'disseny-web', 'desarrollo-web': 'desenvolupament-web', 'marketing-digital': 'marketing-digital', seo: 'seo', 'migraciones-y-mantenimiento': 'migracions-i-manteniment' },
};

function localizedPathsFor(url) {
  const current = new URL(url);
  const segments = current.pathname.split('/').filter(Boolean);
  const locale = locales.includes(segments[0]) ? segments[0] : 'es';
  const routeSegments = locale === 'es' ? segments : segments.slice(1);
  const localizedPath = (target, page, service) => {
    const prefix = target === 'es' ? '' : `/${target}`;
    if (page === 'home') return prefix || '/';
    const pagePath = `${prefix}/${pageSlugs[target][page]}`;
    return service ? `${pagePath}/${serviceSlugs[target][service]}` : pagePath;
  };

  let page;
  let service;
  if (routeSegments.length === 0) {
    page = 'home';
  } else {
    page = Object.entries(pageSlugs[locale]).find(([, slug]) => slug === routeSegments[0])?.[0];
    if (page === 'services' && routeSegments[1]) {
      service = Object.entries(serviceSlugs[locale]).find(([, slug]) => slug === routeSegments[1])?.[0];
      if (!service) return undefined;
    }
  }
  if (!page) return undefined;

  return locales.map((target) => ({ lang: localeTags[target], url: new URL(localizedPath(target, page, service), current.origin).href }))
    .concat({ lang: 'x-default', url: new URL(localizedPath('es', page, service), current.origin).href });
}

export default defineConfig({
  site: 'https://tau.studio',
  output: 'static',
  trailingSlash: 'never',
  i18n: {
    locales: ['es', 'en', 'fr', 'ca'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap({
    serialize(item) {
      const links = localizedPathsFor(item.url);
      if (links) item.links = links;
      return item;
    },
  })],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
});
