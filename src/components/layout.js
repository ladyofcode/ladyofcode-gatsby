/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./reset.module.scss"
import "./global.module.scss"
import layoutStyles from "./layout.module.scss"

import Header from "./header"
import Footer from "./footer"


const Layout = ({ children }) => {

  return (
    <div className={layoutStyles.outerContainer}>
      <Header />
      <main className={layoutStyles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
