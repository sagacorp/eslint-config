'use strict'

module.exports = {
  env: {
    node: true
  },

  plugins: [
    'import-alias',
    'simple-import-sort',
  ],

  rules: {
    'no-console': [process.env.NODE_ENV === 'development' ? 'off' : 'error', { allow: ['warn', 'error'] }],
    'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    camelcase: 'off',
    'arrow-parens': ['error', 'as-needed'],
    'import-alias/import-alias': ['error', { relativeDepth: 0, aliases: [{ alias: '@', matcher: '^src' }] }],
    'import/extensions': ['error', 'always', { js: 'never', ts: 'never', cjs: 'never', cts: 'never', mjs: 'never', mts: 'never', jsx: 'never', tsx: 'never' }],
    'simple-import-sort/imports': ['error',
      {
        groups: [
          ['^vue', '^@?\\w'],
          ['^@/(?!pages|components|assets)\\w+'],
          ['^@/pages/'],
          ['^@/components/'],
          ['^@/assets/'],
          ['^\\u0000'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.?(css|styl|sass)$']
        ]
      }
    ],
    'simple-import-sort/exports': 'error',
    'prefer-template': 'error',
    'vue/component-tags-order': ['error', { order: ['template', 'script', 'style'] }],
    'vue/first-attribute-linebreak': ['error', { singleline: 'beside', multiline: 'beside' }],
    'vue/html-closing-bracket-newline': ['error', { singleline: 'never', multiline: 'never' }],
    'vue/multiline-html-element-content-newline': 'error',
    'vue/new-line-between-multi-line-property': 'error',
    'vue/no-deprecated-filter': 'error',
    'vue/no-deprecated-slot-scope-attribute': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-static-inline-styles': 'error',
    'vue/no-this-in-before-route-enter': 'error',
    'vue/no-undef-components': ['error', { ignorePatterns: ['router(\\-\\w+)+', 'VTooltip', 'i18n'] }],
    'vue/no-useless-mustaches': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/prefer-separate-static-class': 'error',
    'vue/prefer-template': 'error',
    'vue/require-default-prop': 'error',
    'vue/require-direct-export': 'error',
    'vue/require-explicit-emits': 'error',
    'vue/singleline-html-element-content-newline': 'error',
    'vue/v-for-delimiter-style': 'error',
  },

  ignorePatterns: [
    'dist/',
  ],
}
