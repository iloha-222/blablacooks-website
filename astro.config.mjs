// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // site: 'https://blablacooks.fr', // À configurer quand le domaine sera prêt
  integrations: [sitemap()],
});
