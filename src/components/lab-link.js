import React, { Component } from "react"
import { Link } from "gatsby"

import labPostStyles from "./lab-link.module.scss"


import Img from "gatsby-image"

const getCategories = items => {
    let categoryItems = items.map(item => {
        return item.node.frontmatter.category
    })
    let uniqueCategories = new Set(categoryItems)
    let categories = Array.from(uniqueCategories)
    categories = ["all posts", ...categories]
    return categories
  }



class LabItems extends Component {
  state = {
    items: this.props.items.edges,
    articlePostItems: this.props.items.edges,
    categories: getCategories(this.props.items.edges),
    selectedItem: getCategories(this.props.items.edges) && getCategories(this.props.items.edges)[0],
  }
  handleItems = category => {
    if (category === "all posts") {
      this.setState({
        articlePostItems: [...this.state.items],
      })
    } else {
      this.setState({
        articlePostItems: [
          ...this.state.items.filter(edge => {
            return edge.node.frontmatter.category === category
          }),
        ],
        selectedItem: category,
      })
    }
  }
  
  
  render() {
    return (
      <ul className={labPostStyles.postList}>
        {/* <div>
        {this.state.categories.map((category, index) => {
            return (
            <button type="button" key={index} style={this.state.selectedItem === category ? activeButtonClass : null} onClick={() => this.handleItems(category)}>
                {category}
            </button>
            )
        })}
        </div> */}

        {this.state.articlePostItems.map(edge => {
          return (
            <li key={edge.node.id}>
              
                <Link to={`/lab/${edge.node.frontmatter.slug}`}>
                  <Img fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} />
                  <h2>{edge.node.frontmatter.title}</h2>
                </Link>
              
            </li>
          )
        })}
      </ul>
    )
  }
}

export default LabItems
