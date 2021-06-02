const path = require('path')

const rootImportPlugin = {
  resolve: 'gatsby-plugin-root-import',
  options: {
    src: path.join(__dirname, 'src'),
    assets: path.join(__dirname, 'src/assets'),
    components: path.join(__dirname, 'src/components'),
    constants: path.join(__dirname, 'src/constants'),
    hooks: path.join(__dirname, 'src/hooks'),
    masks: path.join(__dirname, 'src/masks'),
    pages: path.join(__dirname, 'src/pages'),
    schemas: path.join(__dirname, 'src/schemas'),
    screens: path.join(__dirname, 'src/screens'),
    utils: path.join(__dirname, 'src/utils'),
  },
}

module.exports = {
  plugins: [rootImportPlugin].filter(Boolean),
}
