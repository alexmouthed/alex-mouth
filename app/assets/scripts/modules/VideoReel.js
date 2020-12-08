import React, { useEffect } from "react"
import filmData from "./Landing/filmData"
import Page from "./Page"

function VideoReel() {
  return (
    <Page scroll={true} title="Video Reel">
      <div className="container page-section--more-p page-section">
        <h2 className="display-4 mb-3 text-center">Video Reel</h2>
        <h3 className="">Contents</h3>

        <div className="row px-2 justify-content-between">
          {filmData.map(film => {
            if (film.link) {
              return (
                <div key={film.title} className="col-xl-3 col-lg-4 col-md-6 px-3 py-3">
                  <a className="font-weight-bold bg-black px-2 rounded py-2 lead video-reel__link" href={`#${film.title}`}>
                    {film.title}
                  </a>
                </div>
              )
            }
          })}
        </div>

        {filmData.map(film => {
          if (film.link) {
            return (
              <div key={film.title} id={film.title} className="page-section">
                <h3 className="mb-5">{film.title + " | " + film.date + " | " + film.role}</h3>
                <div className="embed-responsive px-4 embed-responsive-21by9 video-slide__iframe mb-3 mx-auto">
                  <iframe title={film.title} className="embed-responsive-item" src={film.link} frameBorder="0" allowFullScreen></iframe>
                </div>
              </div>
            )
          }
        })}
      </div>
    </Page>
  )
}

export default VideoReel
