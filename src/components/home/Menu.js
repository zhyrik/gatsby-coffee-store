import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import Title from '../global/Title'

/**
 * Class react component for menu section.
 * @class
 * @returns {JSX.Element} - Rendered component.
 * @useIn - components/layout/layout.js
*/
export default class Menu extends Component {
  static propTypes = {
    prop: PropTypes.array
  }
  render() {
    const items = this.props.items
    
    if (items && items.length > 0) {
      return (
        <section className="menu pt-5">
          <div className="container">
            <Title>Best of our menu</Title>
            <div className="row mb-5">
              {items.map(({ node }) => (
                <div
                  key={node.id}
                  className="col-11 cor-md-6 my-3 d-flex mx-auto"
                >
                  <div>
                    <Img fixed={node.image.fixed} />
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section>
          <div className="constainer">
            <Title>Best of out menu</Title>
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h2>there are no items to display</h2>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}


