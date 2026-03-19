import { Linter } from 'eslint';
import stylistic, { type StyleRules } from '@stylistic/eslint-plugin';

const stylisticRules: Linter.RulesRecord = {
  '@stylistic/array-bracket-spacing': ['error', 'never'],
  '@stylistic/arrow-parens': [
    'error',
    'always',
    { requireForBlockBody: true },
  ],
  '@stylistic/arrow-spacing': [
    'error',
    {
      after: true,
      before: true,
    },
  ],
  '@stylistic/block-spacing': ['error', 'always'],
  '@stylistic/brace-style': [
    'error',
    'stroustrup',
    { allowSingleLine: true },
  ],
  '@stylistic/comma-dangle': ['error', 'always-multiline'],
  '@stylistic/comma-spacing': [
    'error',
    {
      after: true,
      before: false,
    },
  ],
  '@stylistic/comma-style': ['error', 'last'],
  '@stylistic/computed-property-spacing': [
    'error',
    'never',
    { enforceForClassMembers: true },
  ],
  '@stylistic/dot-location': ['error', 'property'],
  '@stylistic/eol-last': ['error'],
  '@stylistic/generator-star-spacing': [
    'error',
    {
      after: true,
      before: false,
    },
  ],
  '@stylistic/indent': ['error', 2],
  '@stylistic/indent-binary-ops': ['error', 2],
  '@stylistic/key-spacing': [
    'error',
    {
      afterColon: true,
      beforeColon: false,
    },
  ],
  '@stylistic/keyword-spacing': [
    'error',
    {
      after: true,
      before: true,
    },
  ],
  '@stylistic/lines-between-class-members': [
    'error',
    'always',
    { exceptAfterSingleLine: true },
  ],
  '@stylistic/max-statements-per-line': ['error', { max: 1 }],
  '@stylistic/member-delimiter-style': [
    'error',
    {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      multilineDetection: 'brackets',
      overrides: {
        interface: {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
        },
      },
      singleline: { delimiter: 'semi' },
    },
  ],
  '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
  '@stylistic/multiline-ternary': ['error', 'always-multiline'],
  '@stylistic/new-parens': ['error'],
  '@stylistic/no-extra-parens': ['error', 'functions'],
  '@stylistic/no-floating-decimal': ['error'],
  '@stylistic/no-mixed-operators': [
    'error',
    {
      allowSamePrecedence: true,
      groups: [
        [
          '==',
          '!=',
          '===',
          '!==',
          '>',
          '>=',
          '<',
          '<=',
        ],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
    },
  ],
  '@stylistic/no-mixed-spaces-and-tabs': ['error'],
  '@stylistic/no-multi-spaces': ['error'],
  '@stylistic/no-multiple-empty-lines': [
    'error',
    {
      max: 1,
      maxBOF: 0,
      maxEOF: 0,
    },
  ],
  '@stylistic/no-tabs': ['error'],
  '@stylistic/no-trailing-spaces': ['error'],
  '@stylistic/no-whitespace-before-property': ['error'],
  '@stylistic/object-curly-spacing': ['error', 'always'],
  '@stylistic/object-curly-newline': [
    'error',
    {
      ObjectExpression: {
        multiline: true,
        minProperties: 2,
        consistent: true,
      },
      ObjectPattern: {
        multiline: true,
        minProperties: 2,
        consistent: true,
      },
      ImportDeclaration: {
        multiline: true,
        minProperties: 2,
        consistent: true,
      },
      ExportDeclaration: {
        multiline: true,
        minProperties: 2,
        consistent: true,
      },
    },
  ],
  '@stylistic/operator-linebreak': ['error', 'before'],
  '@stylistic/padded-blocks': [
    'error',
    {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    },
  ],
  '@stylistic/quote-props': ['error', 'consistent-as-needed'],
  '@stylistic/quotes': [
    'error',
    'single',
    {
      allowTemplateLiterals: 'always',
      avoidEscape: false,
    },
  ],
  '@stylistic/rest-spread-spacing': ['error', 'never'],
  '@stylistic/semi': ['error'],
  '@stylistic/semi-spacing': [
    'error',
    {
      after: true,
      before: false,
    },
  ],
  '@stylistic/space-before-blocks': ['error', 'always'],
  '@stylistic/space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'never',
    },
  ],
  '@stylistic/space-in-parens': ['error', 'never'],
  '@stylistic/space-infix-ops': ['error'],
  '@stylistic/space-unary-ops': [
    'error',
    {
      nonwords: false,
      words: true,
    },
  ],
  '@stylistic/spaced-comment': [
    'error',
    'always',
    {
      block: {
        balanced: true,
        exceptions: ['*'],
        markers: ['!'],
      },
      line: {
        exceptions: ['/', '#'],
        markers: ['/'],
      },
    },
  ],
  '@stylistic/template-curly-spacing': ['error'],
  '@stylistic/template-tag-spacing': ['error', 'never'],
  '@stylistic/type-annotation-spacing': ['error', {}],
  '@stylistic/type-generic-spacing': ['error'],
  '@stylistic/type-named-tuple-spacing': ['error'],
  '@stylistic/wrap-iife': [
    'error',
    'any',
    { functionPrototypeMethods: true },
  ],
  '@stylistic/yield-star-spacing': [
    'error',
    {
      after: true,
      before: false,
    },
  ],
  '@stylistic/array-bracket-newline': [
    'error',
    {
      multiline: true,
      minItems: 3,
    },
  ],
  '@stylistic/array-element-newline': [
    'error',
    {
      multiline: true,
      minItems: 3,
    },
  ],
  '@stylistic/curly-newline': [
    'error',
    {
      consistent: true,
      minElements: 2,
      multiline: true,
    },
  ],
  '@stylistic/function-call-argument-newline': ['error', 'consistent'],
  '@stylistic/function-call-spacing': ['error', 'never'],
  '@stylistic/function-paren-newline': ['error', { minItems: 4 }],
  '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
  '@stylistic/line-comment-position': ['error', 'above'],
  '@stylistic/linebreak-style': ['error', 'unix'],
  '@stylistic/lines-around-comment': [
    'error',
    {
      beforeBlockComment: true,
      beforeLineComment: true,
      allowBlockStart: true,
      allowClassStart: true,
      allowObjectStart: true,
      allowArrayStart: true,
    },
  ],
  '@stylistic/max-len': [
    'error',
    {
      code: 100,
      comments: 65,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreRegExpLiterals: true,
    },
  ],
  '@stylistic/multiline-comment-style': ['error', 'separate-lines'],
  '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
  '@stylistic/no-confusing-arrow': ['error'],
  '@stylistic/no-extra-semi': ['error'],
  '@stylistic/nonblock-statement-body-position': ['error', 'beside'],
  '@stylistic/one-var-declaration-per-line': ['error', 'always'],
  '@stylistic/semi-style': ['error', 'last'],
  '@stylistic/switch-colon-spacing': [
    'error',
    {
      after: true,
      before: false,
    },
  ],
  '@stylistic/wrap-regex': ['error'],
} satisfies StyleRules;

export const stylisticConfigs: Linter.Config[] = [
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    plugins: { '@stylistic': stylistic },
    rules: stylisticRules,
  },
];
