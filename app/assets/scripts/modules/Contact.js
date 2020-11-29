import React, { useEffect } from "react"
import Page from "./Page"
import SvgImg from "./SVGIMG"

function Contact() {
  return (
    <Page title="Contact">
      <div className="container page-section page-section--more-p page-section-min-full">
        <h3 className="display-4 text-center">
          <span className="text--icon">{SvgImg.chat}</span> Get in Touch
        </h3>
      </div>
    </Page>
  )
}

export default Contact
