// @ts-check

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { url } from './src/lib/config';

// https://astro.build/config
export default defineConfig({
  site: url,

  // Enable React to support React JSX components.
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
