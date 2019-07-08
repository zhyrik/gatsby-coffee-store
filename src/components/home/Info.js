import React from 'react'
import { Link } from 'gatsby'

import Title from '../global/Title'

/**
 * Functional react component for info section.
 * @function
 * @returns {JSX.Element} - Rendered component.
 * @useIn - pages/index.js
*/
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title>Our story</Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">We would like to introduce ourselves. Gareth and I are both from upstate New York, we met while in art school- he got a degree in film and currently works in the television and film industry in NYC and I got a degree in painting, which is coming in very handy while sitting in making art with our 3 children. We have often talked about owning a coffee shop; a place where people could come and feel like they are at home, have people that know them and see them and call out the best in them. </p>
            <Link to="/about/">
              <button className="btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
