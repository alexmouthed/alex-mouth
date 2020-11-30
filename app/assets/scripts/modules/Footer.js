import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import SvgImg from "./SVGIMG"

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container pt-4">
        <h4 className="text-center">
          <Link to="/">
            <h3 className="site-header__logo--text">
              Alex <span className="text--sansita">Mouth</span>
            </h3>
          </Link>
        </h4>
        <hr className="my-2 bg-light" />
        <div className="col-md-3 mb-4 mx-auto d-flex justify-content-between">
          <a href="https://www.facebook.com/leggiagency">{SvgImg.facebook}</a>
          <a href="/">{SvgImg.twitter}</a>
          <a href="https://www.instagram.com/engraved_arts/">{SvgImg.instagram}</a>
          <a href="https://www.linkedin.com/in/alex-mouth-54a905179/">{SvgImg.linkedin}</a>
        </div>
        <div className="text-center py-3">
          <small className="text-light lead site-footer__text-content">Copyright &copy; 2020 Alexmouth. All rights reserved. </small>
          <Link to="/contact" className="btn btn--red">
            Get in Touch
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
