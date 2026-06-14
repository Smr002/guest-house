import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sq', 'es', 'fr', 'it', 'el'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
