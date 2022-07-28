'use strict'

module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/standard',
    '@sagacorp/base',
    'plugin:tailwindcss/recommended',
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'tailwindcss/no-custom-classname': 'off',
  }
}
