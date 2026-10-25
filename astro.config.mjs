import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import path from 'node:path';

export default defineConfig({
  site: 'https://tau.studio',
  output: 'static',
  trailingSlash: 'never',
  integrations: [sitemap()],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
});