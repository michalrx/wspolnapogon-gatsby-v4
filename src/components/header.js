import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      backgroundHeader: file(relativePath: { eq: "head-bg-FHD.jpg" }) {
        childImageSharp {
          fixed(quality: 100, width: 1920, height: 214) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      logoImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 442, height: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
console.log(data);
  return (
    <BackgroundImage fixed={data.backgroundHeader.childImageSharp.fixed}>
      <div className="container logo">
        <Link to="/">
          {/* <img src={WspolnaPogonLogo} alt="logo" /> */}
          <Img fixed={data.logoImage.childImageSharp.fixed} alt="test" />
        </Link>
      </div>
    </BackgroundImage>
  ) 
}
