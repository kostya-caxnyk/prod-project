/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const path = require('path')

module.exports = {
  meta: {
    type: null,
    docs: {
      description: 'feature sliced relative path checker',
      category: 'Fill me in',
      recommended: false,
      url: null
    },
    fixable: 'code',
    schema: [
      {
        type: 'object',
        properties: {
          alias: {
            type: 'string'
          }
        }
      }
    ]
  },

  create(context) {
    const alias = context.options[0]?.alias || ''

    return {
      ImportDeclaration(node) {
        // example app/entities/Article
        const value = node.source.value
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        const importTo = alias ? value.replace(`${alias}/`, '') : value

        // example C:\Users\tim\Desktop\javascript\production_project\src\entities\Article
        const fromFilename = context.getFilename()

        if (shouldBeRelative(fromFilename, importTo)) {
          context.report(
            node,
            'Within a single slice, all paths must be relative.'
          )
        }
      }
    }
  }
}

function isPathRelative(path) {
  return path === '.' || path.startsWith('./') || path.startsWith('../')
}

const layers = {
  entities: 'entities',
  features: 'features',
  shared: 'shared',
  pages: 'pages',
  widgets: 'widgets'
}

function shouldBeRelative(from, to) {
  if (isPathRelative(to)) {
    return false
  }

  // example entities/Article
  const toArray = to.split('/')
  const toLayer = toArray[0] // entities
  const toSlice = toArray[1] // Article

  if (!toLayer || !toSlice || !layers[toLayer]) {
    return false
  }

  const normalizedPath = path.toNamespacedPath(from)
  const projectFrom = normalizedPath.split('src')[1]
  const fromArray = projectFrom.split('\\')

  const fromLayer = fromArray[1]
  const fromSlice = fromArray[2]

  if (!fromLayer || !fromSlice || !layers[fromLayer]) {
    return false
  }

  return fromSlice === toSlice && toLayer === fromLayer
}
