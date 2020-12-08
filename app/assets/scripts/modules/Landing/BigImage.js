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
          <p className="big-image__description">Film Director</p>
          <p>
            <a href="#about-alex" className="btn btn--yellow">
              More about Alex Mouth
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default BigImage
