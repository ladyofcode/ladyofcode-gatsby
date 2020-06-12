import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import Img from "gatsby-image"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <h1>{frontmatter.title}</h1>
        <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
        <h2>{frontmatter.date}</h2>
        {/* {frontmatter.tags ? (
          <ul className="taglist">
              {frontmatter.tags.map(tag => (
                <li key={tag + `tag`}>
                  <Link to={`/tags/${tag}/`}>{tag}</Link>
                </li>
              ))}
          </ul>
        ) : null} */}
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`