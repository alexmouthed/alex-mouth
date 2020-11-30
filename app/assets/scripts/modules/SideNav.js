import React, { useEffect } from "react"

function SideNav() {
  return (
    <div className="side-nav rounded">
      <h3 className="display-4 side-nav__title">Updates</h3>
      <hr />
      <a href="https://www.strangetroublesthefilm.com/" className="side-nav__links">
        Project in progreses
      </a>
      <a href="https://en.wikipedia.org/wiki/Esther_Audu" className="side-nav__links">
        Mention by Esther Audu
      </a>

      <a href="https://en.wikipedia.org/wiki/Tinsel_(TV_series)" className="side-nav__links">
        Tinsel (Director 2008-2014)
      </a>
      <a href="http://www.yeoal.com/2011/07/big-brother-all-stars-kenyan-contestant.html" className="side-nav__links">
        Yeoal (Director)
      </a>
      <a href="https://www.ndi.org/my-vote-fit-change-Naija" className="side-nav__links">
        My vote fit change Naija (Director)
      </a>
      <a href="https://www.modernghana.com/nollywood/15806/us-embassy-abuja-honoured-adaora-ukoh-julius.html" className="side-nav__links">
        My vote fit change Naija (Honor)
      </a>
      <a href="https://encomium.ng/bon-awards-director-of-iyabo-ojos-silence-alex-mouth-speaks/" className="side-nav__links">
        Iyabo Ojo’s Silence (Bon Award)
      </a>
      <a href="https://www.talkafricanmovies.com/wine-for-chocolates/" className="side-nav__links">
        Wine for Chocolates (Director)
      </a>
    </div>
  )
}

export default SideNav
