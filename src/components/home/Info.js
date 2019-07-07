import React from 'react'
import { Link } from 'gatsby'

import Title from '../global/Title'

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title>Our story</Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">We would like to introduce ourselves. Gareth and I are both from upstate New York, we met while in art school- he got a degree in film and currently works in the television and film industry in NYC and I got a degree in painting, which is coming in very handy while sitting in making art with our 3 children. We have often talked about owning a coffee shop; a place where people could come and feel like they are at home, have people that know them and see them and call out the best in them. I thought a shop near a school where we could have an afternoon or 2 a week where kids come and get warm cookies and steamed milk and help with their homework, a place where musicians can come and play during music nights or poets can read the thoughts that have swirled themselves onto paper-demanding a life of their own, a place where women learning to speak English, who spend day after day getting the short end of the stick will get handed a honey stick and a warm cup of tea and an invitation to practice speaking and raising their voices in courage and strength, a place where discussions about faith and life and hope and doubt are encouraged long into the night and people leave with hearts filled with the warmth of having reached towards the important questions of life. Over the last few years we have met ESL teachers, poets, musicians, pastors and professors, artists and dreamers, teachers and people that just really love kids and I didn't realize that the last piece of the puzzle that was being divinely put together was the coffee shop. </p>
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
