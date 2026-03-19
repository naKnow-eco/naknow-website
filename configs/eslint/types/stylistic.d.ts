import { type Linter } from 'eslint';
import { type RuleOptions } from '@stylistic/eslint-plugin';

export {};

declare module '@stylistic/eslint-plugin' {
  type StyleRules = Partial<{ [K in keyof RuleOptions]: Linter.RuleEntry<RuleOptions[K]> }>;
}
