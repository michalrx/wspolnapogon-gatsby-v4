import React from "react"

import { Link } from "gatsby"
import { navigate } from "@reach/router"
import { Box, Heading } from "@chakra-ui/core"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import { normalizePath } from "../../utils/get-url-path"

function BlogPost({ data }) {
  const { nextPage, previousPage, page } = data
  const { title, content, featuredImage } = page

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1)
  }

  return (
    <Layout>
      <Heading as="h1" size="xl" mb={5}>
        {title}
      </Heading>

      {!!featuredImage &&
        featuredImage.remoteFile &&
        featuredImage.remoteFile.childImageSharp && (
          <Box mb={5} style={{height: '100%', maxHeight: 600}}>
            <Img
              imgStyle={{height: '100%', maxHeight: 600, objectPosition: 'top'}}
              fluid={featuredImage.remoteFile.childImageSharp.fluid}
            />
          </Box>
        )}

      <p dangerouslySetInnerHTML={{ __html: content }} />

      <br />
      <Link to="/" onClick={handleGoBack}>Wróć do poprzedniej strony</Link>

      <br />
      {!!nextPage && (
        <Link to={normalizePath(nextPage.uri)}>Next: {nextPage.title}</Link>
      )}
      <br />
      {!!previousPage && (
        <Link to={normalizePath(previousPage.uri)}>
          Previous: {previousPage.title}
        </Link>
      )}
    </Layout>
  )
}

export default BlogPost
