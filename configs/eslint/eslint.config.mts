import { defineConfig } from 'eslint/config';

import { baseConfigs } from './configs/base';
import { vueConfigs } from './configs/vue';
import { jsonConfigs } from './configs/json';
import { cssConfigs } from './configs/css';
import { mdConfigs } from './configs/md';
import { stylisticConfigs } from './configs/stylistic';

export default defineConfig([
  baseConfigs,
  vueConfigs,
  jsonConfigs,
  cssConfigs,
  mdConfigs,
  stylisticConfigs,
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/.nuxt/**',
    ],
  },
]);
