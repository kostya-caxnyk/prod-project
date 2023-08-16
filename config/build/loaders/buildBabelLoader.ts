export const buildBabelLoader = () => ({
  test: /\.(js|jsx|tsx|ts)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [['@babel/preset-env', { targets: 'defaults' }]],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        ['i18next-extract', { locales: ['ua', 'en'], keyAsDefaultValue: true }]
      ]
    }
  }
})
