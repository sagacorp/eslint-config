'use strict'

module.exports = {
  env: {
    node: true
  },

  plugins: [
    'simple-import-sort'
  ],

  extends: [
    'plugin:tailwindcss/recommended'
  ],

  rules: {
    camelcase: 'off',
    'arrow-parens': ['error', 'as-needed'],
    'tailwindcss/no-custom-classname': 'off',
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
    'vue/padding-line-between-blocks': 'error'
  },

  ignorePatterns: [
    'dist/'
  ],
}
