import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import path from 'path'
import fs from 'fs'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
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
