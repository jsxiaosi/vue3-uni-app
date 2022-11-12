module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.nvue'],
      rules: {
        'vue/comment-directive': 'off',
      },
    },
  ],
  extends: ['@jsxiaosi/eslint-config-vue', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
  },
};
