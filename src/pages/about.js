import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BacgroundSection from '../components/global/BacgroundSection'
import Info from '../components/home/Info'

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BacgroundSection 
      img = { data.img.childImageSharp.fluid}
      style = "default-background"
      title = "About us"
    />
    <Info />
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath: {eq: "about-background.jpeg"}) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
}
`

export default AboutPage
