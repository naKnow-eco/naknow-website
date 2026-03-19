import { Linter } from 'eslint';
import markdown from '@eslint/markdown';

const mdRules = {};

export const mdConfigs: Linter.Config[] = [
  ...markdown.configs.recommended.map((config) => ({
    ...config,
    files: ['**/*.md'],
  })),
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/gfm',
    rules: mdRules,
  },
];
