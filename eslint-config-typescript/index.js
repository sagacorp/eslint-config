'use strict'

module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],

  rules: {
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'warn',
    '@typescript-eslint/parameter-properties': ['error', { prefer: 'parameter-property' }],
  }
}
