'use strict'

module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },

  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript',
    '@sagacorp/base',
  ],

  rules: {},
}
