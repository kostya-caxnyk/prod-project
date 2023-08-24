import path from 'path'
import type webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv } from './config/build/types/config'

const config = (env: BuildEnv): webpack.Configuration => {
  const mode = env.mode || 'development'
  const port = env.port || 3000
  const apiUrl = env.apiUrl || 'http://localhost:8000/'

  const isDev = mode === 'development'

  return buildWebpackConfig({
    mode,
    paths: {
      entry: './src/index.tsx',
      html: path.resolve(__dirname, 'public', 'index.html'),
      build: path.resolve(__dirname, 'build'),
      src: path.resolve(__dirname, 'src'),
      locales: path.resolve(__dirname, 'public', 'locales'),
      buildLocales: path.resolve(__dirname, 'build', 'locales')
    },
    isDev,
    port,
    apiUrl,
    project: 'frontend'
  })
}

export default config
