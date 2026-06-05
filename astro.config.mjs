// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 本番は SSG（静的生成）→ Nginx で直接配信
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});