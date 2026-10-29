import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://gauravb.co.uk',
  output: 'static',
  vite: { plugins: [tailwindcss()] }
});
