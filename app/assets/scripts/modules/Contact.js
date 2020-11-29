import React, { useEffect } from "react"
import Page from "./Page"
import SvgImg from "./SVGIMG"

function Contact() {
  return (
    <Page title="Contact">
      <div className="page-section page-section--contact page-section--more-p page-section-min-full">
        <h3 className="display-4 text-light text-center">
          <span className="text--icon">{SvgImg.chat}</span> Get in Touch
        </h3>

        <div className="contact container py-5">
          <div className="col-md-6 rounded contact__address">
            <h3 className="display-4">USA</h3>
            <p className="lead">
              1626 N. Wilcox Ave <br />
              Suite #349, Hollywood, CA 90028
            </p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Contact
