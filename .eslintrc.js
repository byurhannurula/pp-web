module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'import', 'jsx-a11y', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
  },
  rules: {
    'no-console': 0,
    'no-use-before-define': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'jsx-a11y/href-no-hash': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
}
