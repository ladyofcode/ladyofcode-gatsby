import React from "react"
import IconInstagram from 'react-ionicons/lib/LogoInstagram'
import IconLinkedin from 'react-ionicons/lib/LogoLinkedin'
import IconGithub from 'react-ionicons/lib/LogoGithub'
import IconTwitter from 'react-ionicons/lib/LogoTwitter'
import globalStyles from "../components/footer.module.scss"

const Footer = () => {
    return (
        <footer>
            <div className={globalStyles.socials}>
                <a href="https://www.instagram.com/ladyofcode/"><IconInstagram color="#fff" fontSize="30px"/></a>
                <a href="https://www.linkedin.com/in/ladyofcode/"><IconLinkedin color="#fff" fontSize="30px" /></a>
                <a href="https://github.com/ladyofcode"><IconGithub color="#fff" fontSize="30px" /></a>
                <a href="https://twitter.com/ladyofcode"><IconTwitter color="#fff" fontSize="30px" /></a>
            </div>
            {`Built with <3 by Tabs. All rights reserved ® ${new Date().getFullYear()}.  Yes, all of them.`}
        </footer>
    )
}

export default Footer