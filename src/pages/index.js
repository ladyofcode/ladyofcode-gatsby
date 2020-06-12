import React from "react"
import Particles from 'react-particles-js';
import ParticleJSON from "./particlesjs-config.json"

import homeStyles from "./home.module.scss"

import Header from "../components/header"
import SEO from "../components/seo"
import "../components/global.module.scss"

const IndexPage = () => (
  <>
    <Particles className={homeStyles.particles} 
                  params={ParticleJSON} />
      
    <Header />
      
    <SEO title="Home" />
    <div className={homeStyles.banner}>

      <h1 className={homeStyles.title}>Tabs - @ladyofcode</h1>
      <h2>Developer | Designer | Nerd</h2>

    </div>
  </>
)

export default IndexPage
