import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BacgroundSection from '../components/global/BacgroundSection'
import Info from '../components/home/Info'
import Menu from '../components/home/Menu'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BacgroundSection 
      img = { data.img.childImageSharp.fluid}
      style = "default-background"
      title = "Best coffee!!!"
    />
    <Info />
    <Menu items = { data.menu.edges } />
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
  menu:allContentfulCoffeItem {
    edges {
      node {
        description {
          content {
            content {
              value
            }
          }
        }
        id
        price
        title
        category
        image {
          fixed(width: 50, height: 50) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage
