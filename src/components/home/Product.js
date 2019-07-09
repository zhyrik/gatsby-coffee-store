import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

/**
 *functional react component for product item 
 * @function
 * @returns {JSX.Element} - Rendered component.
 * @useIn - ./Products.js
 */
function Product({ product }) {
  console.log(product)
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{minHeight: '100%'}}>
        <Img fluid={product.image.fluid} className="card-img-top"/>
        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <h6>{product.price}</h6>
          <button className="btn btn-yellow mt-3 text-capitalize">
            add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.any
}

export default Product

