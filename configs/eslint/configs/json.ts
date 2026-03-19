import { Linter } from 'eslint';
import json from '@eslint/json';

const jsonRules = {};

export const jsonConfigs: Linter.Config[] = [
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    rules: jsonRules,
    ignores: ['**/tsconfig.json', '**/tsconfig.*.json'],
  },
  {
    files: [
      '**/*.jsonc',
      '**/tsconfig.json',
      '**/tsconfig.*.json',
    ],
    plugins: { json },
    language: 'json/jsonc',
    rules: jsonRules,
  },
  {
    files: ['**/*.json5'],
    plugins: { json },
    language: 'json/json5',
    rules: jsonRules,
  },
];
