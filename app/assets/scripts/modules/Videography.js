import React, { useEffect } from "react"

function Videography() {
  return (
    <>
      <h3 className="display-4 text-center mb-3 text-rust mt-5">Videography</h3>

      <form className="col-sm-8 col-md-6 col-lg-5 col-xl-4 mx-auto" name="videography" method="post">
        <input type="hidden" name="form-name" value="videography" />

        <p>
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
        </p>

        <h6 className="text-rust">Select services to include</h6>
        <p className="custom-control custom-checkbox">
          <input name="wedding-video" type="checkbox" className="custom-control-input" id="wedding-video" />
          <label className="custom-control-label" htmlFor="wedding-video">
            Wedding videography
          </label>
        </p>

        <p className="custom-control custom-checkbox">
          <input name="music-video" type="checkbox" className="custom-control-input" id="music-video" />
          <label className="custom-control-label" htmlFor="music-video">
            Music videography
          </label>
        </p>

        <p className="custom-control custom-checkbox">
          <input name="advert-video" type="checkbox" className="custom-control-input" id="advert-video" />
          <label className="custom-control-label" htmlFor="advert-video">
            Advertisement video
          </label>
        </p>

        <p className="custom-control custom-checkbox">
          <input name="documentary" type="checkbox" className="custom-control-input" id="documentary" />
          <label className="custom-control-label" htmlFor="documentary">
            Documentary
          </label>
        </p>

        <p>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input name="email" type="email" id="email" required placeholder="* Enter your email" className="form-control" />
        </p>

        <p>
          <label htmlFor="optional-description" className="sr-only">
            Optional description
          </label>
          <textarea name="description" id="optional-description" placeholder="Description (optional)" cols="30" rows="4" className="form-control"></textarea>
        </p>

        <input type="submit" value="Submit" className="form-control mt-3 btn btn--red" />
      </form>
    </>
  )
}

export default Videography
