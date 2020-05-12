import { graphql } from "gatsby"

export const fragments = graphql`
  fragment HeroImage on File {
    childImageSharp {
      fluid(quality: 90, maxWidth: 1440) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`
