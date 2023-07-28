module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended", "plugin:i18next/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["react", "i18next"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": 'off',
    "@typescript-eslint/prefer-nullish-coalescing": 'off',
    "@typescript-eslint/strict-boolean-expressions": 'off',
    "no-prototype-builtins": 'off',
    "react/react-in-jsx-scope": 'off',
    "react/no-deprecated": 'off',
    "@typescript-eslint/no-unused-vars": ['warn'],
    "@typescript-eslint/naming-convention": 'off',
    "i18next/no-literal-string": ["error", {markupOnly: true, ignoreAttribute: ['data-testid']}]
  },
  globals: {
    __IS_DEV__: true
  },
  overrides: [{
    files: ['**/src/**/*.test.{ts,tsx}'],
    rules: {
      "i18next/no-literal-string": 'off'
    }
  }]
};
