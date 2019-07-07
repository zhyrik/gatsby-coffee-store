import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function BacgroundSection({
  img, style, title, children
}) {
  return (
    <div>
      <BackgroundImage
        className = { style }
        fluid = { img }
      >
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
