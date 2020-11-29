import React, { useEffect } from "react"
import Fade from "react-reveal/Fade"
import alexMouth from "../../../images/alexmouth.jpg"
import starnow from "../../../images/starnow.png"
import vimeo from "../../../images/vimeo-logo.png"
import pulse from "../../../images/pulse-nigeria.png"
import imdb from "../../../images/imdb.png"

function BriefDescription() {
  return (
    <div className="page-section container">
      <div className="row px-3">
        <Fade>
          <div className="col-md">
            <img className="img-fluid" sizes="637px" src={alexMouth} alt="Alexmouth" />
          </div>
        </Fade>
        <Fade>
          <div className="col-md align-self-center pl-lg-5 mt-3 mt-md-0">
            <h3 className="display-4 text-storm">Alexmouth is a renowned film director, an influencer and a movie maker popularly known for his strong reputation in the industry.</h3>
          </div>
        </Fade>
      </div>
      <div className="col-md-8 mx-auto py-5">
        <Fade left>
          <h3 className="display-4 text-center">AS SEEN IN</h3>
        </Fade>
        <Fade>
          <div className="row py-sm-5 px-3 rounded">
            <div className="col-sm img--small align-self-center text--hover">
              <a href="https://www.starnow.com/alexmouth/">
                <img src={starnow} alt="My Starnow profile" />
              </a>
            </div>
            <div className="col-sm img--small align-self-center text--hover">
              <a href="https://www.imdb.com/name/nm2339396/">
                <img src={imdb} alt="My imdb profile" />
              </a>
            </div>
            <div className="col-sm img--small align-self-center text--hover">
              <a href="https://vimeo.com/alexmouth01/">
                <img src={vimeo} alt="My vimeo profile" />
              </a>
            </div>
            <div className="col-sm img--small align-self-center text--hover">
              <a href="https://www.pulse.ng/entertainment/movies/celebrity-birthday-nollywood-director-alex-mouth/53pe5t5">
                <img src={pulse} alt="Article on pulse ng" />
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default BriefDescription
