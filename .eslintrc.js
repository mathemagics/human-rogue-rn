module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    '@react-native-community',
    'prettier',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  overrides: [
    // typescript
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        strict: 'off',
        'prettier/prettier': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react/display-name': 'off',
        'react/jsx-key': 0,
        'react/jsx-uses-vars': 'error',
        'react/prop-types': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
          },
        ],
      },
    },
  ],
  env: {
    'jest/globals': true,
  },
};
