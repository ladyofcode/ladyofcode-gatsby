import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

//import PostLink from "../components/post-link"
import LabItems from "../components/lab-link"

const LabPage = ({
  data: {
    allMarkdownRemark,
    siteSearchIndex,
  },
}) => {

  // const Posts = allMarkdownRemark.edges
  // .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
  // .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return( 

    <Layout>
    <SEO title="Lab" />
    <h1>Lab</h1>
    <LabItems items={allMarkdownRemark} /> 

  </Layout>

  )
  
  }

export default LabPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { 
      order: DESC, fields: [frontmatter___date] }
      filter: {fileAbsolutePath: {regex: "/lab-markdown/"}}
      ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            category
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800, maxHeight: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    siteSearchIndex {
      index
    }
  }
`
