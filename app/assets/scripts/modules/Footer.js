import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import SvgImg from "./SVGIMG"

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container pt-4">
        <h4 className="text-center">
          <Link className="site-header__logo--text" to="/">
            <h3>Alexmouth</h3>
          </Link>
        </h4>
        <hr className="my-2 bg-light" />
        <div className="col-md-3 mb-4 mx-auto d-flex justify-content-between">
          <Link to="/">{SvgImg.facebook}</Link>
          <Link to="/">{SvgImg.twitter}</Link>
          <Link to="/">{SvgImg.instagram}</Link>
          <Link to="/">{SvgImg.linkedin}</Link>
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
