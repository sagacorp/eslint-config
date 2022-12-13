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
    'import-alias/import-alias': ['error', {relativeDepth: 0, aliases: [{ alias: '@', matcher: '^src' }]}],
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
    'vue/component-tags-order': ['error', {order: ['template', 'script', 'style']}],
    'vue/first-attribute-linebreak': ['error', {singleline: 'beside', multiline: 'beside'}],
    'vue/html-closing-bracket-newline': ['error', {singleline: 'never', multiline: 'never'}],
    'vue/singleline-html-element-content-newline': 'error',
    'vue/multiline-html-element-content-newline': 'error',
    'vue/require-default-prop': 'error',
    'vue/padding-line-between-blocks': 'error',
  },

  ignorePatterns: [
    'dist/',
  ],
}
