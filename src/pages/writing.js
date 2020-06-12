import React from "react"
import { graphql } from "gatsby"
import Search from "../components/search"
import Layout from "../components/layout"
import SEO from "../components/seo"

//import PostLink from "../components/post-link"
import PostItems from "../components/post-link"

const WritingPage = ({
  data: {
    allMarkdownRemark,
    siteSearchIndex,
  },
}) => {

  // const Posts = allMarkdownRemark.edges
  // .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
  // .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  // console.log({allMarkdownRemark: { edges }})

  return( 

    <Layout>
    <SEO title="Writing" />
    <h1>Writing</h1>
    <Search searchIndex={siteSearchIndex.index} />

    <PostItems items={allMarkdownRemark} /> 

  </Layout>

  )
  
  }

export default WritingPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { 
      order: DESC, fields: [frontmatter___date] }
      filter: {fileAbsolutePath: {regex: "/post-markdown/"}}
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
          }
        }
      }
    }
    siteSearchIndex {
      index
    }
  }
`
