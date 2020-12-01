import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import SvgImg from "../SVGIMG"

function BigImage() {
  return (
    <div className="big-image">
      <div className="big-image__bg-cover">
        <div className="big-image__text-content">
          <h3 className="big-image__subtitle">
            ALEX MOUTH <span className="big-image__icon">{SvgImg.tradeMark}</span>
          </h3>
          <p className="big-image__description">
            <a href="https://www.starnow.com/alexmouth/">Influencer</a> <br />
            <a href="https://www.imdb.com/name/nm2339396/"> Film Director</a> <br /> <a href="https://www.imdb.com/name/nm2339396/">Movie Maker</a> <br /> <a href="https://www.linkedin.com/in/alex-mouth-54a905179/">Editor</a>
          </p>
          <p>
            <Link to="/about" className="btn btn--red btn-lg">
              About Alex Mouth
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default BigImage
