import React, { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import Directing from "./Contact/Directing"
import Editing from "./Contact/Editing"
import Videography from "./Contact/Videography"
import Page from "./Page"
import SvgImg from "./SVGIMG"

function Contact() {
  const [service, setService] = useState("")

  return (
    <Page title="Contact">
      <div className="page-section container px-3 container--absolute-full page-section--contact page-section--more-p page-section-min-full">
        <form className="col-sm-8 page-section col-md-6 col-lg-5 col-xl-4 mx-auto">
          <h3 className="display-4 font-weight-bolder text-red text-center text-rust py-4">Book Me</h3>
          <div className="form-group">
            <label className="sr-only" htmlFor="service">
              Select the service you want
            </label>
            <select onChange={e => setService(e.target.value)} id="service" className="form-control custom-select">
              <option value="">Select the service you want</option>
              <option value="editing">Editing</option>
              <option value="directing">Directing</option>
              <option value="videography">Videography</option>
            </select>
          </div>
        </form>

        <div className="z-index height-min">
          {service === "editing" ? <Editing /> : null}

          {service === "directing" ? <Directing /> : null}

          {service === "videography" ? <Videography /> : null}
        </div>

        <h3 className="display-4 text-light text-center">
          <span className="text--icon">{SvgImg.chat}</span> Get in Touch
        </h3>

        <div className="contact container py-5">
          <div className="row justify-content-between">
            <div className="col-md-5 mb-3 mb-md-1 rounded contact__address">
              <h3 className="display-4 text-rust">USA</h3>
              <p className="lead">
                1626 N. Wilcox Ave <br />
                Suite #349, Hollywood, CA 90028
              </p>
            </div>
            <div className="col-md-5 rounded contact__address">
              <h3 className="display-4 text-rust">Handles</h3>
              <p className="lead">
                <span className="text--icon">{SvgImg.telephone}</span> Phone:{" "}
                <a className="text-handles" href="tel:+18189324655">
                  +1 (818) 932-4655
                </a>
              </p>

              <p className="lead">
                <span className="text--icon">{SvgImg.email}</span> Email:{" "}
              </p>
              <p className="lead">
                <span className="text--icon">{SvgImg.instagram}</span> Instagram:{" "}
                <a className="text-handles" href="https://www.instagram.com/engraved_arts">
                  @engraved_arts
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Contact
