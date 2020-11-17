module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'airbnb-base',
    'prettier'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    // 'react/prop-types': 1,
    // 'react/jsx-filename-extension': 0,
    'comma-dangle': 0,
    quotes: [2, 'single', { avoidEscape: true }]
  },
  overrides: [
    {
      files: ['*.js']
    }
  ]
};
