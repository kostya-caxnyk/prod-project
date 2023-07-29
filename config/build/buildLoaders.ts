import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'

export default (options: BuildOptions): webpack.RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack']
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const babelLoader = {
    test: /\.(js|jsx|tsx|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env', { targets: 'defaults' }]],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          [
            'i18next-extract',
            { locales: ['ua', 'en'], keyAsDefaultValue: true }
          ]
        ]
      }
    }
  }

  return [babelLoader, typescriptLoader, buildCssLoader(options.isDev), svgLoader, fileLoader]
}
