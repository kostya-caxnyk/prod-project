import { type RuleSetRule } from 'webpack'
import type webpack from 'webpack'
import { DefinePlugin } from 'webpack'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { type BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    locales: '',
    buildLocales: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }
  config.resolve!.modules!.push(paths.src)
  config.resolve!.extensions!.push('.ts', '.tsx')
  // @ts-expect-error 123
  config.resolve!.alias['@'] = paths.src

  // eslint-disable-next-line no-param-reassign
  config.module!.rules = config.module!.rules!.map(
    // @ts-expect-error right type
    (rule: RuleSetRule) => {
      // eslint-disable-next-line @typescript-eslint/prefer-includes
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i }
      }

      return rule
    }
  )

  config.module!.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })
  config.module!.rules.push(buildCssLoader(true))

  config.plugins!.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify(''),
      __PROJECT__: JSON.stringify('storybook')
    })
  )

  return config
}
