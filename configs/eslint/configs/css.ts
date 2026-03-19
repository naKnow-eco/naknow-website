import { Linter } from 'eslint';
import css from '@eslint/css';

const cssRules = {};

export const cssConfigs: Linter.Config[] = [
  {
    ...css.configs.recommended,
    files: ['**/*.css'],
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    rules: cssRules,
  },
];
