import React from 'react'
import PropTypes from 'prop-types'

/**
 * Functional react component for titles <h2></h2>.
 * @function
 * @param {node} chidren - React props.
 * @returns {JSX.Element} - Rendered component.
 * @useIn - home/Info.js
 * @useIn - home/Menu.js
 * @useIN - home/Products.js
*/
function Title({ children }) {
  return (
    <div className="row">
      <div className="col">
        <h2 className="display-4 text-cappitalize font-weight-bold text-center">{ children }</h2>
      </div>
    </div>
  )
}

Title.propTypes = {
  chidren: PropTypes.node
}

export default Title

