import { Link, useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import PropTypes from "prop-types"
import React, {useState, useEffect, useCallback} from "react"
import navStyles from "./header.module.scss"

//import Image from "../components/logo"
import icon from "../static/images/menu_icon.svg"


const StyledHeader = styled.div`
  background-color: ${props => props.color};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: inherit;
  margin: 0 auto;
  z-index: 2;
  transition: all 1.2s ease-in-out;
`;


const Header = () => {

  const [isExpanded, toggleExpansion] = useState(false);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks{
            name
            link
          }
        }
      }
    }
  `)
 
  const [color, setColor] = useState("rgba(0, 30, 39, 0.1)");

  const handleScroll = useCallback((event) => {
    let scrollTop = window.scrollY;

      if (scrollTop >= 50) {
        console.log("hi")
        setColor("rgba(0, 30, 39, 0.9)");
      }

      if (scrollTop < 50) {
        console.log("low")
        setColor("rgba(0, 30, 39, 0.1)");
      }
});

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, []);


  return(
    <header className={navStyles.header}>
      <StyledHeader color={color} >
        <nav>
          <div className={navStyles.logobar}>
            <Link to="/" >
              <span className={navStyles.logo}>/loc</span>
            </Link>
            <img className={navStyles.menuImg} src={icon} alt="menu icon" onClick={() => toggleExpansion(!isExpanded)}/>
          </div>
          <ul className={`${ isExpanded ? navStyles.show : navStyles.hidden } ${navStyles.menu}`}>
            {data.site.siteMetadata.menuLinks.map(link => (
              <li key={link.name}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </StyledHeader>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
