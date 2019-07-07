import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BacgroundSection from '../components/layouts/BacgroundSection'
import Info from '../components/home/Info'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BacgroundSection 
      img = { data.img.childImageSharp.fluid}
      style = "default-background"
      title = "Best coffee!!!"
    />
    <Info />
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath: {eq: "default-background.jpeg"}) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
}
`

export default IndexPage
