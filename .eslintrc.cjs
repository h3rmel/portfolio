/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['import-helpers'],
  rules: {
    'vue/multi-word-component-names': 'off',
    /**
     * Import Helpers
     * @see https://github.com/willhoney7/eslint-plugin-import-helpers
     */
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always', // new line between groups
        groups: [
          '/^vue/',
          'module',
          '/^@/components/',
          '/^@/utils/',
          '/^@/assets/',
          '/^@/data/',
          '/^@/',
          ['parent', 'sibling', 'index']
        ],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ]
  }
};
