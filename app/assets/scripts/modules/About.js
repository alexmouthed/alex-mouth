import React, { useEffect } from "react"
import Page from "./Page"
import alexmouthFull from "../../images/alexmouth-full.jpg"

function About() {
  return (
    <Page title="About">
      <div className="container page-section page-section--more-p page-section-min-full">
        <h3 className="display-4 text-center">About Alexmouth</h3>
        <div className="row py-4">
          <div className="col-md-5 align-self-center">
            <img className="img-fluid" sizes="640px" src={alexmouthFull} alt="Alexmouth" />
          </div>
          <div className="col-md-7 align-self-center px-lg-5">
            <p className="lead px-3 px-md-1">Alex mouth is a determined, straight forward person who likes to break new grounds, never scared of starting from the desert. He believe nothing is impossible and you only need to learn how to do things right to get it right. He always believe that a good is good until better arrives. His drive to be the best at his works has driven him to put service first and produce only standard works. His passion for being challenged creatively has put him in high demand.</p>
            <p className="lead px-3 px-md-1">His special skills includes, editing and directing. He is efficient in the use of software's like Final Cut, Edius, Premiere Pro Series, Adobe After Effects, Adobe photoshop, Corel draw and still learning more... His hobbies includes: watching movies, games and traveling. He has been involved in various films, tv series, documentaries, productions. He his presently one of the directors of a tv series titled: TINSEL, an M-net production.</p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default About
