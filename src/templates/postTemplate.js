import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import postStyles from "./post-styles.module.scss"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <div className={postStyles.post}>
          <h1 className={postStyles.heading}>{frontmatter.title}</h1>
          <p className={postStyles.subheading}>{frontmatter.date}</p>
          {frontmatter.tags ? (
            <ul className={postStyles.taglist}>
                {frontmatter.tags.map(tag => (
                  <li key={tag + `tag`}>
                    <Link to={`/tags/${tag}/`}>{tag}</Link>
                  </li>
                ))}
            </ul>
          ) : null}
          <div
            className={postStyles.postContent}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        
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
      }
    }
  }
`