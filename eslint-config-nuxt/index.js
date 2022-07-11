'use strict'

module.exports = {
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    '@sagacorp/base',
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },

  ignorePatterns: [
    '.nuxt/'
  ]
}
