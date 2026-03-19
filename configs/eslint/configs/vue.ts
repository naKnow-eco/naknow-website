import { Linter } from 'eslint';
import pluginVue from 'eslint-plugin-vue';
import type { RuleOptions } from 'eslint-plugin-vue/dist/eslint-typegen';
import tseslint from 'typescript-eslint';

const vueRules: Linter.RulesRecord = {
  'vue/html-indent': ['error', 2],
} satisfies RuleOptions;

export const vueConfigs: Linter.Config[] = [
  ...pluginVue.configs['flat/recommended-error'].map((config) => ({
    ...config,
    files: ['**/*.vue'],
    rules: vueRules,
  })),
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
];
