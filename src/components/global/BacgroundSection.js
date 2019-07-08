import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import PropTypes from 'prop-types'

/**
 * Functional react component for background image.
 * @function
 * @param {object} img - graphql data path.
 * @returns {JSX.Element} - Rendered component.
 * @useIn - pages/index.js
 * @useIn - pages/about.js
*/
function BacgroundSection({
  img, style, title, children
}) {
  return (
    <div>
      <BackgroundImage
        className = { style }
        fluid = { img }
      >
        <div className="image-overlay"></div>
        <h1
          className="title text-white text-uppercase text-center display-4 font-weight-bold"
        >{ title }</h1>
        { children }
      </BackgroundImage>
    </div>
  )
}

BacgroundSection.defaultProps = {
  title: 'hello world!',
  style: 'default-background'
}

BacgroundSection.propTypes = {
 children: PropTypes.node,
 img: PropTypes.object.isRequired,
}

export default BacgroundSection

