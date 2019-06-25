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
    'no-alert': 0,
    'no-console': 0,
    'comma-dangle': 0,
    'no-use-before-define': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'import/prefer-default-export': 0,
    'react/display-name': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/prop-types': 0,
  },
}
