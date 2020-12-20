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
          <form className="text-white col-sm-8 col-md-6 col-lg-5 col-xl-4 mx-auto" name="editing" method="post">
            <input type="hidden" name="form-name" value="editing" />

            <div className="form-group">
              <label htmlFor="service-type" className="sr-only">
                Select video length
              </label>
              <select name="service-type" id="service-type" required className="form-control custom-select">
                <option value="">Select video length</option>
                <option value="15min">15 minutes or less</option>
                <option value="30min">30 minutes or less</option>
                <option value="1hr">1 hour or less</option>
                <option value="2hrs">2 hours and above</option>
              </select>
            </div>

            <h6 className="text-rust">Select services to include</h6>
            <div className="custom-control custom-checkbox">
              <input name="colour-grading" type="checkbox" className="custom-control-input" id="colour-grading" required />
              <label className="custom-control-label" htmlFor="colour-grading">
                Colour grading
              </label>
            </div>

            <div className="custom-control custom-checkbox">
              <input name="sound-design" type="checkbox" className="custom-control-input" id="sound-design" required />
              <label className="custom-control-label" htmlFor="sound-design">
                Sound design and mixing
              </label>
            </div>

            <div className="custom-control custom-checkbox">
              <input name="motion-graphics" type="checkbox" className="custom-control-input" id="motion-graphics" required />
              <label className="custom-control-label" htmlFor="motion-graphics">
                Motion graphics
              </label>
            </div>

            <div className="custom-control custom-checkbox">
              <input name="subtitles" type="checkbox" className="custom-control-input" id="subtitles" required />
              <label className="custom-control-label" htmlFor="subtitles">
                Subtitles
              </label>
            </div>

            <div className="form-group mt-3">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input name="email" type="email" id="email" required placeholder="* Enter your email" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="link" className="sr-only">
                Link to reference video
              </label>
              <input name="link-to-reference-video" type="text" id="link" placeholder="Link to reference video (optional)" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="optional-description" className="sr-only">
                Optional description
              </label>
              <textarea name="description" id="optional-description" placeholder="Description (optional)" cols="30" rows="4" className="form-control"></textarea>
            </div>

            <input type="submit" value="Submit" className="form-control mt-3 btn btn--red" />
          </form>
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
