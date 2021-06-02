/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  if (page.path == '/') {
    page.matchPath = '/*'
    createPage(page)
  }
}
