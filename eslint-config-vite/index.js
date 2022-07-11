'use strict'

module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/standard',
    '@sagacorp/base',
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
