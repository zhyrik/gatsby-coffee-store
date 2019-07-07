/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"
import Navbar from './layouts/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./layout.css"

const Wrap = styled.div`
max-width: 960px;
margin: 0 auto;
background: pink;
margin-top: -25px;
padding: 10px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
