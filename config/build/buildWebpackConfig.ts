import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import buildLoaders from './buildLoaders'
import buildPlugins from './buildPlugins'
import { buildDevServer } from './buildDevServer'
import buildResolver from './buildResolvers'

export function buildWebpackConfig (
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths, isDev } = options
  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: '[name].[contenthash].js',
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolver(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
