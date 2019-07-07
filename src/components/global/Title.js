import React from 'react'
import PropTypes from 'prop-types'

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
  chidren: PropTypes.node.isRequired
}

export default Title

