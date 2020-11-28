import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import SvgImg from "../SVGIMG"

function BigImage() {
  return (
    <div className="big-image">
      <div className="big-image__bg-cover">
        <div className="big-image__text-content">
          <h3 className="big-image__subtitle">
            ALEXMOUTH <span className="big-image__icon">{SvgImg.tradeMark}</span>
          </h3>
          <p className="big-image__description">
            Influencer <br /> Film Director <br /> Movie Maker <br /> Editor
          </p>
          <p>
            <Link to="/about" className="btn btn--red btn-lg">
              About Alexmouth
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default BigImage
