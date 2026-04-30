/* eslint-disable @typescript-eslint/no-require-imports */
const isProd = process.env.NODE_ENV === 'production';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    port: 4004,
  },
  ssr: true,
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/small-naknow.svg',
        },
      ],
    },
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  modules: [
    [
      '@nuxtjs/i18n',
      {
        locales: [
          {
            name: 'English',
            code: 'en',
            iso: 'en-US',
            file: 'en-US.json',
            shortName: 'EN',
          },
        ],
        langDir: 'locales/',
        defaultLocale: 'en',
        strategy: 'prefix_and_default',
        lazy: true,
        detectBrowserLanguage: false,
        compilation: {
          strictMessage: false,
        },
      },
    ],
    'nuxt-svgo',
    '@nuxt/image',
    '@nuxtjs/device',
  ],

  typescript: {
    tsConfig: {
      include: ['../types/*.d.ts', '../**/types/*.d.ts'],
    },
  },

  css: [
    './styles/partial/main.css',
    './styles/partial/display-fix.css',
    './styles/partial/fonts.css',
    './styles/partial/colors.css',
    './styles/partial/theme.css',
  ],

  postcss: {
    plugins: {
      'postcss-import': {},
      'postcss-mixins': { mixinsDir: 'styles/mixins' },
      'postcss-simple-vars': {
        variables: {
          ...(require('./styles/variables/color').default),
          ...(require('./styles/variables/text').default),
          ...(require('./styles/variables/z-index').default),
          ...(require('./styles/variables/media').default),
          ...(require('./styles/variables/radius').default),
          ...(require('./styles/variables/size').default),
        },
      },
      'postcss-nested': {},
      'postcss-inline-media': {},
      'postcss-hexrgba': {},
      'postcss-focus-within': {},
      'postcss-gap-properties': {},
      'postcss-url': {},
      'postcss-calc': {},
      'postcss-view-sizes': {},
      'cssnano': isProd
        ? {
          preset: [
            'default',
            {
              cssDeclarationSorter: true,
              calc: true,
              colormin: true,
              convertValues: true,
              discardComments: true,
              discardDuplicates: true,
              discardEmpty: true,
              discardOverridden: true,
              discardUnused: true,
              mergeIdents: true,
              mergeLonghand: true,

              // !!NEVER ACTIVATE vvv
              mergeRules: false,
              minifyFontValues: true,
              minifyGradients: true,
              minifyParams: true,
              minifySelectors: true,
              normalizeCharset: true,
              normalizeDisplayValues: true,
              normalizePositions: true,
              normalizeRepeatStyle: true,
              normalizeString: true,
              normalizeTimingFunctions: true,
              normalizeUnicode: true,
              normalizeUrl: true,
              normalizeWhitespace: true,
              orderedValues: true,
              reduceIdents: true,
              reduceInitial: true,
              reduceTransforms: true,
              svgo: true,
              uniqueSelectors: true,
              zindex: true,
            },
          ],
        }
        : undefined,
    },
  },
});
