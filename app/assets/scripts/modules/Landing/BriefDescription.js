import React, { useEffect } from "react"
import Fade from "react-reveal/Fade"
import alexMouth from "../../../images/alexmouth.webp"
import starnow from "../../../images/starnow.webp"
import vimeo from "../../../images/vimeo-logo.webp"
import pulse from "../../../images/pulse-nigeria.webp"
import imdb from "../../../images/imdb.webp"
import SideNav from "../SideNav"
import SvgImg from "../SVGIMG"

function BriefDescription() {
  return (
    <div id="about-alex" className="page-section height-min page-section--description container">
      <div className="row">
        <div className="col-md-5 col-lg-3 d-none d-md-block">
          <SideNav />
        </div>
        <div className="col-md-7 col-lg-9">
          <div className="row px-3">
            <Fade>
              <div className="col-lg align-self-center">
                <img className="img-thumbnail img-fluid" sizes="637px" src={alexMouth} alt="Alexmouth" />
              </div>
            </Fade>
            <Fade>
              <div className="col-lg align-self-center pl-lg-5 mt-3 mt-md-0">
                <h3 className="display-4 text-storm">Alex Mouth is a renowned film director and a movie maker popularly known for his strong reputation in the industry.</h3>
              </div>
            </Fade>
          </div>
          <div className="col-xl-8 mx-auto py-5">
            <Fade left>
              <h3 className="display-4 text-center">AS SEEN ON</h3>
            </Fade>
            <Fade>
              <div className="row py-sm-3 rounded">
                <div className="col-sm img--small align-self-center text--hover">
                  <a target="blank" href="https://www.starnow.com/alexmouth/">
                    <img sizes="640px" src={starnow} alt="My Starnow profile" />
                  </a>
                </div>
                <div className="col-sm img--small align-self-center text--hover">
                  <a target="blank" href="https://www.imdb.com/name/nm2339396/">
                    <img sizes="640px" src={imdb} alt="My imdb profile" />
                  </a>
                </div>
                <div className="col-sm img--small align-self-center text--hover">
                  <a target="blank" href="https://www.youtube.com/watch?v=cCdRROxgQno">
                    <img sizes="640px" src={vimeo} alt="My vimeo profile" />
                  </a>
                </div>
                <div className="col-sm img--small align-self-center text--hover">
                  <a target="blank" href="https://www.pulse.ng/entertainment/movies/celebrity-birthday-nollywood-director-alex-mouth/53pe5t5">
                    <img sizes="640px" src={pulse} alt="Article on pulse ng" />
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <p className="text-center">
        <a href="#look-what-we-made" className="text-storm btn-scroll">
          {SvgImg.arrow}
        </a>
        <br />
        <span className="pt-3 d-block lead font-weight-bold">Look what we've created</span>
      </p>
    </div>
  )
}

export default BriefDescription
