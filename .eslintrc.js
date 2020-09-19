module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier', 'plugin:react/recommended'],
  plugins: ['prettier'],
  globals: {
    window: true,
    browser: true,
    document: true,
    localStorage: true,
  },
  rules: {},
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
