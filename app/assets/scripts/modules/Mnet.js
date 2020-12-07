import React, { useEffect } from "react"
import Page from "./Page"
import MnetData from "./MnetData"
import Fade from "react-reveal/Fade"

function Mnet() {
  return (
    <Page title="MNET">
      <div className="container container--absolute-full page-section--more-p page-section--grey page-section">
        <h2 className="text-center text-white mb-5">African Magic Original Movies</h2>
        <div className="row px-md-5 justify-content-between">
          {MnetData.map(item => {
            return (
              <Fade key={item.title}>
                <div className={item.last ? "col-lg-6 col-md-6 py-3 px-3 mx-auto" : "col-lg-4 col-md-6 py-3 px-3"}>
                  <div className="mnet-movie px-3 py-3 rounded">
                    <h3 className="mnet-movie__title text-center">{item.title}</h3>
                    <h4 className="mnet-movie__subtitle text-center">{item.role}</h4>
                    <h5 className="mnet-movie__subtitle text-center mb-3 mnet-movie__subtitle--date">{item.date}</h5>
                    <p className="lead text-justify">{item.information}</p>
                  </div>
                </div>
              </Fade>
            )
          })}
        </div>
      </div>
    </Page>
  )
}

export default Mnet
