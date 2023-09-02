import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import path from 'path'
import fs from 'fs'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    reactVirtualized(),
    svgr({
      exportAsDefault: true
    })
  ],
  define: {
    __API__: JSON.stringify('http://localhost:8000'),
    __IS_DEV__: JSON.stringify(true),
    __PROJECT__: JSON.stringify('frontend')
  },
  resolve: {
    alias: [
      {
        find: 'shared',
        replacement: '/src/shared'
      },
      {
        find: 'app',
        replacement: '/src/app'
      },
      {
        find: 'widgets',
        replacement: '/src/widgets'
      },
      {
        find: 'entities',
        replacement: '/src/entities'
      },
      {
        find: 'pages',
        replacement: '/src/pages'
      },
      {
        find: 'features',
        replacement: '/src/features'
      }
    ]
  }
})

const WRONG_CODE =
  'import { bpfrpt_proptype_WindowScroller } from "../WindowScroller.js";'
export function reactVirtualized() {
  return {
    name: 'my:react-virtualized',
    configResolved() {
      const file = require
        .resolve('react-virtualized')
        .replace(
          path.join('dist', 'commonjs', 'index.js'),
          path.join('dist', 'es', 'WindowScroller', 'utils', 'onScroll.js')
        )
      const code = fs.readFileSync(file, 'utf-8')
      const modified = code.replace(WRONG_CODE, '')
      fs.writeFileSync(file, modified)
    }
  }
}
