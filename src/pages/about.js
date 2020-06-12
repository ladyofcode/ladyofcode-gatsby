import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import globalStyles from "../components/global.module.scss"

import IconInstagram from 'react-ionicons/lib/LogoInstagram'
import IconLinkedin from 'react-ionicons/lib/LogoLinkedin'
import IconGithub from 'react-ionicons/lib/LogoGithub'
import IconTwitter from 'react-ionicons/lib/LogoTwitter'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>A bit about me</h1>

    <div className={globalStyles.socials}>
      <a href="https://www.instagram.com/ladyofcode/"><IconInstagram color="#fff" fontSize="40px"/></a>
      <a href="https://www.linkedin.com/in/ladyofcode/"><IconLinkedin color="#fff" fontSize="40px" /></a>
      <a href="https://github.com/ladyofcode"><IconGithub color="#fff" fontSize="40px" /></a>
      <a href="https://twitter.com/ladyofcode"><IconTwitter color="#fff" fontSize="40px" /></a>
    </div>

    <p>I'm a developer currently based in Canberra, Australia. I mostly work in front-end software development in an effort to drive everything towards the user experience being at the core. I have some back-end knowledge and goals of a fullstack skillset. I absolutely thrive working remotely.</p>

    <p>I have a Bachelor's degree in Software Engineering (with Honours), and a Master's in Digital Art (with a specialisation in Visual Effects). My design knowledge is self-taught (as were all my technical art skills prior to my degree) or acquired through short courses. I love learning and make it a core part of my life.</p>

    <p>When I'm not coding or doing one of my <a href="#now">now things</a>, I'm gaming (Cyberpunk tabletop rpg, board games, video games), munching on cookies, reading, or annoying guildies.</p>

    <h2 id="now">What I'm up to now</h2>
    <ul>
      <li>Building my <a href="https://tabassum.com">my personal site</a>.</li>
      <li>Hosting workshops, streams, and projects at <a href="https://artifexanu.com">Artifex.</a></li>
      <li>Developing kickass community software at Grid.</li>
      <li>Designing the <a href="https://re.anu.edu.au/">Research Centre for Deep History's</a> interactive atlas using Leaflet.</li>
      <li>Learning to be a plant mom.</li>
      <li>Plotting to get a cat.</li>
    </ul>

    <h2>Random trivia</h2>
    <ul>
      <li>Australia is actually my fifth country of residence! I'm from South Africa, and lived in Saudi Arabia, Bahrain, and Malaysia.</li>
      <li>I started scripting around the age of twelve and found myself navigating a sea of technology over the next few years. Also forever.</li>
      <li>I've been leading a video gaming guild for 11 years. They're my fam {`<3`}.</li>
      <li>The boundaries people put up between subject areas grinds my gears. Nothing in the real world relies on just one skillset to solve a problem - they're all important, just differently.</li>
      <li>I really do want a cat.</li>
    </ul>
    
    

  </Layout>
)

export default AboutPage
