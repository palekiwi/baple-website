const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

const { NODE_ENV } = process.env

function getDomain(slug) {
  const domains = [
    { name: "plastics", pattern: /^\/plastics\// },
    { name: "energy", pattern: /^\/energy\// },
    { name: "engineering", pattern: /^\/engineering\// },
    { name: "metalPackaging", pattern: /^\/metal-packaging\// },
    { name: "group", pattern: "/" },
  ]

  return domains.find(d => slug.match(d.pattern)).name
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "JavascriptFrontmatter") {
    const slug = createFilePath({ node, getNode, basePath: "pages" })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
    createNodeField({
      node,
      name: "domain",
      value: getDomain(slug),
    })
    createNodeField({
      node,
      name: "publish",
      value: Boolean(node.frontmatter.publish),
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise(resolve => {
    graphql(`
      {
        allJavascriptFrontmatter {
          edges {
            node {
              fileAbsolutePath
              fields {
                slug
                publish
              }
              frontmatter {
                template
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allJavascriptFrontmatter.edges
        .filter(({ node }) => node.fileAbsolutePath.match(/\/pages\//))
        .forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(
              `./src/templates/${
                !node.fields.publish && NODE_ENV == "production"
                  ? "UnderConstruction"
                  : node.frontmatter.template
              }.tsx`
            ),
            context: {
              slug: node.fields.slug,
            },
          })
        })
      resolve()
    })
  })
}
