import { defineConfig } from 'astro/config';
import path from 'node:path';

export default defineConfig({
  site: 'https://tau.studio',
  output: 'static',
  trailingSlash: 'never',
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
});