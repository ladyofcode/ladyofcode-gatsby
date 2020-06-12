const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    const writingPostTemplate = path.resolve(`src/templates/postTemplate.js`)
    const labPostTemplate = path.resolve(`src/templates/labTemplate.js`)
    const tagTemplate = path.resolve(`src/templates/tagsTemplate.js`)
    const cvTemplate = path.resolve(`src/templates/cvTemplate.js`)
  
    const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            frontmatter {
              slug
              tags
              type
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)


      if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
      }

      const posts = result.data.postsRemark.edges    // Creates blog posts
      posts.forEach(({ node }) => {      
        createPage({
          path: node.frontmatter.type === 'lab' ? `/lab${node.frontmatter.slug}` 
                : node.frontmatter.type === 'cv' ? `/cv${node.frontmatter.slug}` 
                : `/writing${node.frontmatter.slug}`,
          // CV uses the writing post template
          component:  node.frontmatter.type === 'lab' ?  labPostTemplate 
                      : node.frontmatter.type === 'cv' ? cvTemplate
                      : writingPostTemplate,
          context: { 
            slug: node.frontmatter.slug 
          }, // additional data can be passed via context
        })
      })

      // Extract tag data from query
      const tags = result.data.tagsGroup.group
      // Make tag pages
      tags.forEach(tag => {
        createPage({
          path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
          component: tagTemplate,
          context: {
            tag: tag.fieldValue,
          },
        })
      })
  }