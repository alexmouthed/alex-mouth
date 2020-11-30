import { throttle } from "lodash"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Header() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false)
  const [navbarBackground, setNavbarBackground] = useState("site-header")

  const runOnScroll = () => {
    if (window.scrollY > 60) {
      setNavbarBackground("site-header site-header--dark")
    } else {
      setNavbarBackground("site-header")
    }
  }

  const scrollThrottle = throttle(runOnScroll, 200)

  useEffect(() => {
    window.addEventListener("scroll", scrollThrottle)

    return () => {
      window.removeEventListener("scroll", scrollThrottle)
    }
  }, [])

  return (
    <header className={isMobileNavActive ? "site-header site-header--is-expanded" : navbarBackground}>
      <div className="container container--full-width">
        <div className="site-header__logo">
          <h4>
            <Link to="/">
              <h3 className="site-header__logo--text">
                Alex <span className="text--sansita">Mouth</span>
              </h3>
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
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsMobileNavActive(!isMobileNavActive)} to="/about">
                  About
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
