module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier', 'plugin:react/recommended'],
  plugins: ['prettier'],
  globals: {
    window: true,
    browser: true,
    document: true,
    localStorage: true,
    fetch: false,
  },
  rules: {
    'no-console': 0,
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0,
  },
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
