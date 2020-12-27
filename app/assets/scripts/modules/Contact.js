import React, { useState, useEffect } from "react"
import Photography from "./Photography"
import Editing from "./Editing"
import Videography from "./Videography"
import Page from "./Page"
import SvgImg from "./SVGIMG"
import Training from "./Training"

function Contact() {
  const [service, setService] = useState("editing")

  return (
    <Page title="Contact">
      <div className="page-section container px-3 container--absolute-full page-section--more-p">
        <h2 className="display-4 font-weight-bolder text-center text-rust py-4">Book Me</h2>

        <div className="container">
          <div className="row justify-content-between">
            <div className="col-5 col-lg-2">
              <button onClick={() => setService("editing")} className="btn font-weight-bolder form-control">
                Editing
              </button>
            </div>
            <div className="col-5 col-lg-2">
              <button onClick={() => setService("photography")} className="btn font-weight-bolder form-control">
                Photography
              </button>
            </div>
            <div className="col-5 col-lg-2">
              <button onClick={() => setService("videography")} className="btn font-weight-bolder form-control">
                Videography
              </button>
            </div>
            <div className="col-5 col-lg-2">
              <button onClick={() => setService("training")} className="btn font-weight-bolder form-control">
                Training
              </button>
            </div>
          </div>
        </div>

        <div className="z-index height-min">
          {service === "editing" ? <Editing /> : null}

          {service === "photography" ? <Photography /> : null}

          {service === "videography" ? <Videography /> : null}

          {service === "training" ? <Training /> : null}
        </div>

        <div className="">
          <h3 className="display-4 mb-5 text-center">
            <span className="text--icon">{SvgImg.chat}</span> Get in Touch
          </h3>

          <div className="contact container">
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
      </div>
    </Page>
  )
}

export default Contact
