module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:import/recommended',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['**/*.js'],
  globals: {
    React: true,
    JSX: true,
    __DEV__: true,
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'react-hooks',
    'prettier',
    'import',
  ],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'react/self-closing-comp': 'warn',
    'no-unused-vars': 'off',
    'no-console': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react-hooks/rules-of-hooks': 'error',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'no-duplicate-imports': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'no-nested-ternary': 'warn',
    'import/no-unresolved': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'react/prop-types': 'off',
  },
};
