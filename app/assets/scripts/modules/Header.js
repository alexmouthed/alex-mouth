import React, { useState } from "react"
import { Link } from "react-router-dom"

function Header() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false)

  return (
    <header className={isMobileNavActive ? "site-header site-header--is-expanded" : "site-header"}>
      <div className="container container--full-width">
        <div className="site-header__logo">
          <h4>
            <Link className="site-header__logo--text" to="/">
              <h3>Alexmouth</h3>
            </Link>
          </h4>
        </div>

        <div onClick={() => setIsMobileNavActive(!isMobileNavActive)} className={isMobileNavActive ? "site-header__menu-icon site-header__menu-icon--close-x" : "site-header__menu-icon"}>
          <div className="site-header__menu-icon__middle"></div>
        </div>

        <div className={isMobileNavActive ? "site-header__menu-content site-header__menu-content--is-visible" : "site-header__menu-content"}>
          <div className="site-header__btn-container">
            <Link onClick={() => setIsMobileNavActive(!isMobileNavActive)} to="/contact" className="btn btn--red">
              Get in touch
            </Link>
          </div>
          <nav className="primary-nav primary-nav--pull-right">
            <ul className="primary-nav--tm-md">
              <li>
                <Link onClick={() => setIsMobileNavActive(!isMobileNavActive)} to="/">
                  HOME
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsMobileNavActive(!isMobileNavActive)} to="/about">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsMobileNavActive(!isMobileNavActive)} to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
