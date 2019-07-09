import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Product from './Product'
import Title from '../global/Title'

/**
 *functional react component for products section
 * @function
 * @returns {JSX.Element} - Rendered component.
 * @useIn - ./pages/index.js
 */
export default function Products() {
  const data = useStaticQuery(graphql`
    {
      products: allContentfulCoffeeCategory {
        edges {
          node {
            id
            title
            price
            image {
              fluid(maxHeight: 470) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className="py-5">
      <div className="container">
        <Title>Our products</Title>
        <div className="row">
          {data.products.edges.map(({node}) => {
            return <Product key={node.id} product={node} />
          })}
        </div>
      </div>
    </section>
  )
}
