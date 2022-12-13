'use strict'

module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
  },

  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/standard',
    '@vue/typescript',
    '@sagacorp/base',
  ],

  rules: {
  }
}
