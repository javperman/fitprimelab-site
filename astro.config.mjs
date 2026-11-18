// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  // Enable MDX and Sitemap
  integrations: [mdx(), sitemap()],
  
  // Enable client-side routing
  output: 'static',
  
  // vite config
  vite: {
    ssr: {
      external: ['astrojs'],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },

  // Site URL
  site: 'https://fitprimelab.com',

  // Trailing slash config
  trailingSlash: 'ignore',
});
