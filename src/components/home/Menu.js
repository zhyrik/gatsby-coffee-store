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

  state = {
    categoris: ['all', "dsfkjads"],
    items: null
  }
  // create list of categorys
  createCategory = (categorys) => {
    let newCategorys = categorys.map(category => category.node.category)
    let getCategorys = new Set(newCategorys)
    let arrCategorys = Array.from(getCategorys)
    arrCategorys.unshift('all')
    this.setState({categoris: arrCategorys})
  }
  // filtering data button
  handleCategorys = (items, category) => {
    if (category === 'all') {
      this.setState({items})
    } else {
      let newItems = items.filter(item => item.node.category === category)
      this.setState({items: newItems})
    }
  }

  componentDidMount () {
    this.setState({items: this.props.items})
    this.createCategory(this.props.items)
  }
  render() {
    const { categoris, items } = this.state

    if (items && items.length > 0) {
      return (
        <section className="menu pt-5">
          <div className="container">
            <Title>Best of our menu</Title>
            <div className="row">
              <div className="col-10 mx-auto text-center">
                {categoris.map((category, index) => (
                  <button key={index} className="btn btn-yellow mx-2"
                    onClick={() => {this.handleCategorys(this.props.items, category)}}
                  >{category}</button>
                ))}
              </div>
            </div>
            <div className="row mb-5">
              {items.map(({ node }) => (
                <div
                  key={node.id}
                  className="col-11 col-md-6 my-3 d-flex mx-auto"
                >
                  <div>
                    <Img fixed={node.image.fixed} />
                  </div>
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">{node.title}</h6>
                      <h6 className="mb-0 text-yellow">${node.price}</h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.content[0].content[0].value}</small>
                    </p>
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


