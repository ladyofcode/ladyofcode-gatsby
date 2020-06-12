import React, { Component } from "react"
import { Link } from "gatsby"
import postStyles from "./post-link.module.scss"

const getCategories = items => {
    let categoryItems = items.map(item => {
        return item.node.frontmatter.category
    })
    let uniqueCategories = new Set(categoryItems)
    let categories = Array.from(uniqueCategories)
    categories = ["all posts", ...categories]
    
    return categories
  }

  const activeButtonClass = {
    backgroundColor: "#848378",
    color: "#fff",
  }
  
  

class ArticleItems extends Component {
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
        selectedItem: category,
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
    console.log("hello")
    return (
      <ul className={postStyles.postContainer}>
        <div className={postStyles.buttonBar}>
        {this.state.categories.map((category, index) => {
            return (
            <button type="button" className={postStyles.categoryButtons} key={index} style={this.state.selectedItem === category ? activeButtonClass : null} onClick={() => this.handleItems(category)}>
                {category}
            </button>
            )
        })}
        </div>

        {this.state.articlePostItems.map(edge => {
          return (
            <li key={edge.node.id} className={postStyles.postList}>
              <h2>
                <Link to={`/writing/${edge.node.frontmatter.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </h2>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default ArticleItems
