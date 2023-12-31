module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:i18next/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: ['custom-rules', 'react', 'i18next', 'react-hooks'],
  rules: {
    'custom-rules/path-checker': ['error', { alias: '@' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'no-prototype-builtins': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-deprecated': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/naming-convention': 'off',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: [
          'data-testid',
          'fill',
          'stroke',
          'name',
          'target',
          'direction',
          'align',
          'as',
          'border'
        ]
      }
    ],
    '@typescript-eslint/space-before-function-paren': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/display-name': 'off',
    'multiline-ternary': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/member-delimiter-style': 'off'
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off'
      }
    }
  ]
}
