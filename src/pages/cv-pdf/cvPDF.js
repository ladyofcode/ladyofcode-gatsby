import React from "react";
import JSONData from "../../content/cv/cv.json";
import {
  Document,
  Page,
  Text,
  Font,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import fontExtraLight from "../../static/fonts/Source_Sans_Pro/SourceSansPro-ExtraLight.ttf"
import fontLight from "../../static/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf"
import fontRegular from "../../static/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf"
import fontSemibold from "../../static/fonts/Source_Sans_Pro/SourceSansPro-SemiBold.ttf"
import fontBold from "../../static/fonts/Source_Sans_Pro/SourceSansPro-Bold.ttf"


// import ReactPDF from '@react-pdf/renderer';

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// Create styles
const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "row",
    margin: 0,
    fontFamily: 'Source Sans Pro',
    width: "210mm",
    height: "297mm",
  },
  aside: {
    width: "70mm",
    backgroundColor: "#2D2D2D",
    color: "#D7D6C4",
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    fontSize: 11,
    fontWeight: 'normal',
    fontFamily: 'Source Sans Pro',
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "semibold",
    fontSize: 20,
    textTransform: "uppercase",
    margin: 0,
    padding: 0,
    lineHeight: 1,
  },
  taglineBox: {
    marginTop: 5,
    marginBottom: 10,
  },
  tagline: {
    fontWeight: "light",
    fontSize: 13,
  },
  taglineHeart: {
    width: 9,
    height: 9,
  },
  taglineWithHeart: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#353535",
    marginBottom: 10,
    padding: 10,
  },
  asideBoxText: {
    width: "100%",
    lineHeight: 1,
    color: "#D7D6C4",
    fontSize: 12,
  },
  asideBoxInterestsText: {
    width: "100%",
    lineHeight: 1,
    color: "#2E9994",
    fontSize: 12,
    marginBottom: 5,
  },
  mediaBar: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 5,
    alignItems: "center",
  },
  icon: {
    borderRadius: 9,
    backgroundColor: "#2E9994",
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 3,
    paddingLeft: 3,
    marginRight: 5,
    width: 18,
    height: 18,
    // fontSize: 20,
  },
  iconImage: {
    width: 13,
  },
  skillsTitleBox: {
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  skillsTitleRule: {
    borderBottomColor: '#D7D6C4',
    borderBottomStyle: "solid",
    borderBottomWidth: 0.5,
    flexGrow: 1,
  },
  skillsTitle: {
    textTransform: "uppercase",
    color: "#2E9994",
    fontSize: 20,
    marginRight: 10,
  },
  skillsSubtitle: {
    textTransform: "uppercase",
    marginBottom: 10,
  },
  skillsBox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "light",
  },
  skillsLeftColumn: {
    textAlign: "left",
    width: "50%",
  },
  skillsRightColumn: {
    textAlign: "right",
    width: "50%",
  },
  sevenYears: {
    position: "absolute",
    top: "20%",
    left: "40%",
    fontWeight: "semibold",
    fontSize: 10,
  },
  threeYears: {
    position: "absolute",
    top: "40%",
    left: "40%",
    fontWeight: "semibold",
    fontSize: 10,
  },
  sixMonths: {
    position: "absolute",
    top: "40%",
    left: "38%",
    fontWeight: "semibold",
    fontSize: 10,
  },
  skillsSectionRule: {
    borderBottomColor: '#D7D6C4',
    borderBottomStyle: "dotted",
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  skillsDividerRule: {
    borderBottomColor: '#D7D6C4',
    borderBottomStyle: "solid",
    borderBottomWidth: 0.5,
    marginTop: 15,
    marginBottom: 15,
  },
  softSkillsBox: {
    marginBottom: 5,
    fontWeight: "light",
  },  
  softSkillsTitle: {
    fontWeight: "semibold",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "140mm",
    height: "297mm",
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 10,
  },
  section: {
    width: 360,
  },
  mainTitleBox: {
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainTitle: {
    color: "#2E9994",
    fontWeight: "semibold",
    marginRight: 10,
    fontSize: 18,
  },
  mainTitleRule: {
    borderBottomColor: '#2E9994',
    borderBottomStyle: "solid",
    borderBottomWidth: 0.5,
    flexGrow: 1,
  },
  entry: {
    display: "flex",
    flexDirection: "row",
    width: 360,
  },
  entryBoxContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    lineHeight: 1,
    width: 360,
  },
  firstLine: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 0,
    marginBottom: 0,
    width: 310,
  },
  secondLine: {
    fontWeight: "light",
    paddingTop: 0,
    marginTop: 0,
    marginBottom: 5,
    width: 310,
  },
  itemDateBox:{
    height: "100%",
    marginRight: 5,
  },
  itemDate: {
    display: "inline-block",
    verticalAlign: "middle",
    fontWeight: "light",
  },
  itemTitle: {
    fontSize: 10,
    fontWeight: "semibold",
    marginRight: 5,
  },
  itemDescription: {
    fontSize: 10,
  },
  itemDetail: {
    fontSize: 10,
    fontWeight: "light",
    marginLeft: "auto",
    color: "#757575",
  },
  itemRole: {
    fontSize: 10,
    fontWeight: "light",
    marginLeft: "auto",
    color: "#757575",
  },
  personalProjectsSubtitle: {
    fontSize: 10,
  },
  projectEntry: {
    display: "flex",
    flexDirection: "row",
    fontWeight: "light",
  },
  personalPrjTitle: {
    fontSize: 10,
    width: 70,
    marginRight: 5,
  },
  personalPrjDescription: {
    fontSize: 10,
  },
});

Font.register( {
  family: 'Source Sans Pro',
  fonts: [
    {
      src: fontRegular,
      fontStyle: 'normal'
    },
    {
      src: fontExtraLight,
      fontWeight: 'extralight'
    },
    {
      src: fontLight,
      fontWeight: 'light'
    },
    {
      src: fontSemibold,
      fontWeight: 'semibold'
    },
    {
      src: fontBold,
      fontWeight: 'bold'
    }
  ]})

function sectionGenerator(type, item, index) {
  return (
    <View style={styles.entry} key={`${type}_item_${index}`}>
      <View style={styles.itemDateBox}>
        <Text style={styles.itemDate}>
          {item.yearStarted} - {item.yearEnded === "" ? `Now` : item.yearEnded}
        </Text>
      </View>
      <View style={styles.entryBoxContent}>
        <View style={styles.firstLine}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          { type === "education" ? <Text>{item.description}</Text> : null}
          { type === "education" || "purposefulProjects" ? <Text style={styles.itemDetail}>{item.detail}</Text> : null}
          { type === "experience" ? <Text style={styles.itemRole}> > {item.role}</Text> : null}
        </View>

        { type !== "education" ?  <View style={styles.secondLine}>
                                    <Text>{item.description}</Text> 
                                  </View> 
                                  : null
        }
        
      </View>
     
    </View>
  );
}

// Create Document Component
const CVPDFPage = (props) => {
  const highSkills = JSONData.techSkills.filter(
    (item) => item.category === "high"
  );
  const mediumSkills = JSONData.techSkills.filter(
    (item) => item.category === "medium"
  );
  const lowSkills = JSONData.techSkills.filter(
    (item) => item.category === "low"
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.aside}>
          <View style={styles.introBox}>
            <View style={styles.nameBox}>
              <Text style={styles.name}>
              {JSONData.firstName}
              </Text>
              <Text style={styles.name}>
                {JSONData.lastName}
              </Text>
            </View>
            <View style={styles.taglineBox}>
              <Text style={styles.tagline}>{JSONData.taglineLine1}</Text>
              <View style={styles.taglineWithHeart}>
                <Image
                    style={styles.taglineHeart}
                    src={require("../../static/images/icons/heart.png")}
                ></Image>
                <Text style={styles.tagline}>{`${JSONData.taglineLine2}`}</Text>
              </View>
            </View>
        </View>
          
          <View style={styles.infoBoxes}>

            <View style={styles.box}>
              <View style={styles.mediaBar}>
                <View style={styles.icon}>
                  <Image
                    style={styles.iconImage}
                    src={require("../../static/images/icons/pin.png")}
                  ></Image>
                </View>
                <Text style={styles.asideBoxText}>{JSONData.location}</Text>
              </View>
              <View style={styles.mediaBar}>
                <View style={styles.icon}>
                  <Image
                    style={styles.iconImage}
                    src={require("../../static/images/icons/mail.png")}
                  ></Image>
                </View>
                <Text style={styles.asideBoxText}>{JSONData.email}</Text>
              </View>
            </View>

            <View style={styles.box}>
              <Text style={styles.asideBoxInterestsText}>{JSONData.interests}</Text>

              <View style={styles.mediaBar}>
                <View style={styles.icon}>
                  <Image
                    style={styles.iconImage}
                    src={require("../../static/images/icons/site.png")}
                  ></Image>
                </View>
                <Text style={styles.asideBoxText}>{JSONData.website}</Text>
              </View>

              <View style={styles.mediaBar}>
                <View style={styles.icon}>
                  <Image
                    style={styles.iconImage}
                    src={require("../../static/images/icons/instagram.png")}
                  ></Image>
                </View>
                <View style={styles.icon}>
                  <Image
                    style={styles.iconImage}
                    src={require("../../static/images/icons/linkedin.png")}
                  ></Image>
                </View>
                <View style={styles.icon}>
                  <Image
                    style={styles.iconImage}
                    src={require("../../static/images/icons/github.png")}
                  ></Image>
                </View>
                <View style={styles.icon}>
                  <Image
                    style={styles.iconImage}
                    src={require("../../static/images/icons/twitter.png")}
                  ></Image>
                </View>
              </View>
              <Text>social media: @ladyofcode</Text>
            </View>
          </View>
          
          <View style={styles.hardSkills}>
            <View style={styles.skillsTitleBox}>
              <Text style={styles.skillsTitle}>Skills</Text>
              <View style={styles.skillsTitleRule}></View>
            </View>
            
            <Text style={styles.skillsSubtitle}>Relative skill proficiency</Text>
            <View style={styles.skillsBox}>
              <View style={styles.skillsLeftColumn}>
                {highSkills
                  .slice(0, highSkills.length/2)
                  .map((item, index) => {
                    return <Text key={`high_skill_${item.name}`}>{item.name}</Text>
                })}
              </View>
              <Text style={styles.sevenYears}>7+ years</Text>
              <View style={styles.skillsRightColumn}>
                {highSkills
                    .slice(highSkills.length/2, highSkills.length)
                    .map((item, index) => {
                      return <Text key={`high_skill_${item.name}`}>{item.name}</Text>
                })}
              </View>
            </View>

            <View style={styles.skillsSectionRule}></View>

            <View style={styles.skillsBox}>
                <View style={styles.skillsLeftColumn}>
                  {mediumSkills
                    .slice(0, mediumSkills.length/2)
                    .map((item, index) => {
                      return <Text key={`med_skill_${item.name}`}>{item.name}</Text>
                  })}
                </View>
                <Text style={styles.threeYears}>3+ years</Text>
                <View style={styles.skillsRightColumn}>
                  {mediumSkills
                    .slice(mediumSkills.length/2, mediumSkills.length)
                    .map((item, index) => {
                      return <Text key={`med_skill_${item.name}`}>{item.name}</Text>
                  })}
                </View>
            </View>

            <View style={styles.skillsSectionRule}></View>

            <View style={styles.skillsBox}>
                <View style={styles.skillsLeftColumn}>
                  {lowSkills
                      .slice(0, lowSkills.length/2)
                      .map((item, index) => {
                        return <Text key={`low_skill_${item.name}`}>{item.name}</Text>
                    })}
                </View>
                <Text style={styles.sixMonths}>6+ months</Text>
                <View style={styles.skillsRightColumn}>
                  {lowSkills
                      .slice(lowSkills.length/2, lowSkills.length)
                      .map((item, index) => {
                        return <Text key={`low_skill_${item.name}`}>{item.name}</Text>
                    })}
                </View>
            </View>

            
          </View>

          <View style={styles.skillsDividerRule}></View>

          <View>
              {JSONData.softSkills.map((item, index) => {
                return (
                  <View key={`softskills_${index}`} style={styles.softSkillsBox}>
                    <Text style={styles.softSkillsTitle}>
                      {item.yearStarted} -{" "}
                      {item.yearEnded === "" ? `Now` : item.yearEnded} |{" "}
                      {item.title}
                    </Text>
                    <Text>{item.description}</Text>
                  </View>
                );
              })}
          </View>
        </View>

        <View style={styles.main}>
          <View style={styles.section}>
            <View style={styles.mainTitleBox}>
              <Text style={styles.mainTitle}>education</Text>
              <View style={styles.mainTitleRule}></View>
            </View>
            
            {JSONData.education.map((item, index) => {
              return sectionGenerator("education", item, index);
            })}
          </View>

          <View style={styles.section}>
            <View style={styles.mainTitleBox}>
              <Text style={styles.mainTitle}>experience</Text>
              <View style={styles.mainTitleRule}></View>
            </View>
            
            {JSONData.experience.map((item, index) => {
              return sectionGenerator("experience", item, index);
            })}
          </View>

          <View style={styles.section}>
            <View style={styles.mainTitleBox}>
              <Text style={styles.mainTitle}>projects</Text>
              <View style={styles.mainTitleRule}></View>
            </View>
            
            {JSONData.purposefulProjects.map((item, index) => {
              return sectionGenerator("purposefulProjects", item, index);
            })}
          </View>

          <View style={styles.section}>
            <View style={styles.mainTitleBox}>
              <Text style={styles.personalProjectsSubtitle}>Some personal projects</Text>
            </View>
            
            {(props.data === "all"
              ? JSONData.personalProjects
              : JSONData.personalProjects.filter(
                  (item) => item.category === props.data
                )
            ).slice(0, 6).map((item, index) => {
              return (
                <View
                  style={styles.projectEntry}
                  key={`personalProjects_item_${index}`}
                >
                  <Text style={styles.personalPrjTitle}>{item.title}</Text>
                  <Text style={styles.personalPrjDescription}>
                    |{item.description}
                  </Text>
                </View>
              );
            })}
          </View>

          <View style={styles.section}>
            <View style={styles.mainTitleBox}>
            <Text style={styles.mainTitle}>awards</Text>
              <View style={styles.mainTitleRule}></View>
            </View>
            
            {JSONData.awards.map((item, index) => {
              return sectionGenerator("awards", item, index);
            })}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default CVPDFPage;