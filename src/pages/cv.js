import React, { Component } from "react"
import JSONData from "../content/cv/cv.json"
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from "./cv-pdf/cvPDF.js"
// import { Link } from 'gatsby'
// import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import IconMail from 'react-ionicons/lib/IosMail'
import IconInstagram from 'react-ionicons/lib/LogoInstagram'
import IconLinkedin from 'react-ionicons/lib/LogoLinkedin'
import IconGithub from 'react-ionicons/lib/LogoGithub'
import IconTwitter from 'react-ionicons/lib/LogoTwitter'
import IconDocument from 'react-ionicons/lib/MdDocument'
import IconSite from 'react-ionicons/lib/MdContact'
import IconPin from 'react-ionicons/lib/MdPin'

import Layout from "../components/indexLayout"
import SEO from "../components/seo"
import cvStyles from "./cv.module.scss"

// const updateCategory (category) {
//     this.setState({projectCategory: category})
//   }

function sectionGenerator(type, item, index){

    return(
      <div className={cvStyles.entry} key={`${type}_item_${index}`}>

            <span className={cvStyles.dateBox}>
              <span>{item.yearStarted}</span> - <span>{item.yearEnded === "" ? `Now` : item.yearEnded}</span>
            </span>
          {/* Change div to Link for modal */}
          <div className={cvStyles.entryBoxContent} to={`/cv${ item.slug ? item.slug : "" }`}>
            <span className={cvStyles.firstLine}>
              <span className={cvStyles.itemTitle}>{item.title}</span>
              { type === "education" || type === "courses" ? <span className={cvStyles.itemDescription}>{item.description}</span> : null}
              { type === "education" || "purposefulProjects" ? <span className={cvStyles.itemDetail}>{item.detail}</span> : null}
              { type === "experience" ? <span className={cvStyles.itemRole}>{item.role}</span> : null}
            </span>

            { type !== "education" && type !== "courses" ?  <span className={cvStyles.secondLine}>{item.description}</span> : null}

          </div>
      </div>
    )
}
   
class WorkPage extends Component {

  constructor(props){
    super(props)
    this.state = {
      projectCategory: "all"
    }
  } 

  render () {

    const highSkills = JSONData.techSkills.filter( ( item ) => item.category === "high")
    const mediumSkills = JSONData.techSkills.filter( ( item ) => item.category === "medium")
    const lowSkills = JSONData.techSkills.filter( ( item ) => item.category === "low")

    return (

      <Layout>
        <SEO title="CV" />

        {/* <PDFViewer className={cvStyles.viewer}>
          <MyDocument data={this.state.projectCategory} />
        </PDFViewer> */}

        <div className={cvStyles.buttonBar}>
          <div>
            <button onClick={() => this.setState({projectCategory: "all"})}>All</button>
            <button onClick={() => this.setState({projectCategory: "developer"})}>Developer</button>
            <button onClick={() => this.setState({projectCategory: "designer"})}>Designer</button>
          </div>
          
          {this.state.projectCategory === 'all' ? <span className={cvStyles.allButton}> {`<`} Select a filter to export a CV</span> :
            <PDFDownloadLink document={<MyDocument data={this.state.projectCategory} />} fileName="TabsMF_CV.pdf">
              {({ blob, url, loading, error }) => (loading ? <div className={cvStyles.loading}>'Loading document...'</div> : <span className={cvStyles.exportButton}><IconDocument color="#D7D6C4" /> <span>{`Export ${this.state.projectCategory} CV`}</span></span> )}
            </PDFDownloadLink>
          }
        </div> 
       
        <div className={cvStyles.cvContainer}>
       
          <aside className={cvStyles.aside}>
            <div>
              <h1>{JSONData.firstName}</h1>
              <h1>{JSONData.lastName}</h1>
              <span className={cvStyles.tagline}>{JSONData.taglineLine1}</span>
              <span className={cvStyles.tagline}> {`<3`} {JSONData.taglineLine2}</span>
            </div>
            <div>
              <section className={cvStyles.box}>
                <span className={cvStyles.mediaBar}  >
                  <IconPin className={cvStyles.icon} color="#D7D6C4" />
                  {JSONData.location}
                </span>
                <a className={cvStyles.mediaBar} href="mailto:tabs@ladyofcode.com"><IconMail className={cvStyles.icon} color="#D7D6C4" />{JSONData.email}</a>
              </section>
              <section className={cvStyles.box}>
                <span className={cvStyles.interestsTitle}>{JSONData.interests}</span>
                <a className={cvStyles.mediaBar} href="http://ladyofcode.com/"><IconSite className={cvStyles.icon} color="#D7D6C4" />{JSONData.website}</a>
                <div>
                    <a href={JSONData.socialMedia.instagram}><IconInstagram className={cvStyles.icon} color="#D7D6C4" /></a>
                    <a href={JSONData.socialMedia.linkedin}><IconLinkedin className={cvStyles.icon} color="#D7D6C4" /></a>
                    <a href={JSONData.socialMedia.github}><IconGithub className={cvStyles.icon} color="#D7D6C4" /></a>
                    <a href={JSONData.socialMedia.twitter}><IconTwitter className={cvStyles.icon} color="#D7D6C4" /></a>
                </div>
                <span>social media: ladyofcode</span>
              </section>
            </div>
            
            <section className={cvStyles.hardSkills}>
              <div className={cvStyles.hardSkillsTitle}>
                <h2>Skills</h2>
                <hr />
              </div>
              
              <span className={cvStyles.hardSkillsSubtitle}>Relative skill proficiency</span>
              
              <div>
                <div className={cvStyles.skillBlock}>
                  <ul>
                    {highSkills
                      .slice(0, highSkills.length/2)
                      .map((item, index) => {
                        return <li key={`high_skill_${item.name}`}>{item.name}</li>
                    })}
                  </ul>
                  <span className={cvStyles.sevenYears}>7+ years</span>
                  <ul>
                    {highSkills
                      .slice(highSkills.length/2, highSkills.length)
                      .map((item, index) => {
                        return <li key={`high_skill_${item.name}`}>{item.name}</li>
                      })}
                  </ul>
                </div>

                <hr className={cvStyles.dottedRule} />

                <div className={cvStyles.skillBlock}>
                  <ul>
                    {mediumSkills
                      .slice(0, mediumSkills.length/2)
                      .map((item, index) => {
                        return <li key={`med_skill_${item.name}`}>{item.name}</li>
                    })}
                  </ul>
                  <span className={cvStyles.threeYears}>3+ years</span>
                  <ul>
                    {mediumSkills
                      .slice(mediumSkills.length/2, mediumSkills.length)
                      .map((item, index) => {
                        return <li key={`med_skill_${item.name}`}>{item.name}</li>
                    })}
                  </ul>
                </div>

                <hr className={cvStyles.dottedRule} />

                <div className={cvStyles.skillBlock}>
                  <ul>
                    {lowSkills
                      .slice(0, lowSkills.length/2)
                      .map((item, index) => {
                        return <li key={`low_skill_${item.name}`}>{item.name}</li>
                    })}
                  </ul>
                  <span className={cvStyles.sixMonths}>6+ months</span>
                  <ul>
                    {lowSkills
                      .slice(lowSkills.length/2, lowSkills.length)
                      .map((item, index) => {
                        return <li key={`low_skill_${item.name}`}>{item.name}</li>
                    })}
                  </ul>
                </div>
              </div>
            </section>

            <hr />

            <section id="soft-skills">
                {JSONData.softSkills.map((item, index) => {
                  return (
                    <div key={`soft_skills_${index}`}>
                      <strong>{item.yearStarted} - {item.yearEnded === "" ? `Now` : item.yearEnded} | {item.title}</strong>
                      <p>{item.description}</p>
                    </div>
                  )
                })}
            </section>
          </aside>
  
          <main className={cvStyles.main}>
            <section>
              <span className={cvStyles.mainTitleBox}><h2>education</h2><hr/></span>
              {JSONData.education.map((item, index) => {
                    return (
                      sectionGenerator("education", item, index)
                    )
              })}

              {this.state.projectCategory === "all" &&
                <details>
                  <summary>Stand-alone courses/programs</summary>
                  <div>
                    {JSONData.courses.map((item, index) => {
                          return (
                            sectionGenerator("courses", item, index)
                        )
                    })}
                  </div>
                </details>
              }
              
            </section>

            <section>
              <span className={cvStyles.mainTitleBox}><h2>experience</h2><hr/></span>
              {JSONData.experience.map((item, index) => {
                    return (
                      sectionGenerator("experience", item, index)
                  )
              })}
            </section>

            <section>
            <span className={cvStyles.mainTitleBox}><h2>projects</h2><hr/></span>
              {JSONData.purposefulProjects.map((item, index) => {
                return (
                  sectionGenerator("projects", item, index)
                )
              })}

              <p className={cvStyles.personalProjectsSubtitle}>Some other personal projects</p>
              <ul>
                {
                (this.state.projectCategory === "all" ? JSONData.personalProjects : JSONData.personalProjects.filter( (item ) => item.category === this.state.projectCategory))
                .map((item, index) => {
                  return  <li key={`personalProject_item_${index}`}>
                            {/* Change div to Link for modal */}
                            <div to={`/cv${ item.slug ? item.slug : "" }`}>
                              <span className={cvStyles.personalProjectTitle}>{item.title}</span><span className={cvStyles.personalProjectDescription}>{item.description}</span>
                            </div>
                          </li>
                })}
              </ul>
            </section>
  
            <section>
            <span className={cvStyles.mainTitleBox}><h2>awards</h2><hr/></span>
              {JSONData.awards.map((item, index) => {
                return (
                  sectionGenerator("awards", item, index)
                )
              })}
            </section>
          </main>
        </div>
      </Layout>
    )
  }
}

export default WorkPage
