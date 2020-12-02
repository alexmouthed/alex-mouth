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
            <a href="https://vimeo.com/172918950">Influencer</a> <br />
            <a href="https://vimeo.com/172918950"> Film Director</a> <br /> <a href="https://vimeo.com/208876711">Movie Maker</a> <br /> <a href="https://vimeo.com/172918950">Editor</a>
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
