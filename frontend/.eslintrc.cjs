/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    indent: ['error', 2],
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'always'],
  },
};
