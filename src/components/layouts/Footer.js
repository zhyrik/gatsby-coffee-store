import React from 'react'

/**
 * Functional react component footer page.
 * @function
 * @returns {JSX.Element} - Rendered component.
 * @useIn - components/layout/layout.js
*/
export default function Footer() {
  return (
    <div className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col mx-auto col-md-6 text-yellow text-center text-capitalize">
            <h3>all rigght reserved &copy; {new Date().getFullYear().toString()}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
