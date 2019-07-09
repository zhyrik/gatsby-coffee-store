import React from 'react'

import Title from '../global/Title'

/**
 * functional react component for contact section
 * @function
 * @returns {JSX.Element} - React component
 * @useIn - ./pages/index.js
 */
export default function Contact() {
  return (
    <section className="contact py-5" >
      <Title>contact us</Title>
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
        <form action="https://formspree.io/zhyriki@ukr.net" method="POST">
            <div className="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input type="name" name="name" className="form-control" id="exampleFormControlInput1" placeholder="name" />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput2">Email address</label>
              <input type="email" name="_replyto" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="8" placeholder="description here ..."></textarea>
            </div>
            <button className="btn btn-yellow btn-block mt-5">submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}
