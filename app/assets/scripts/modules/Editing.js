import React, { useEffect } from "react"

function Editing() {
  return (
    <>
      <h3 className="display-4 text-center mt-5 mb-3 text-rust">Editing</h3>
      <form className="col-sm-8 col-md-6 col-lg-5 col-xl-4 mx-auto" name="editing" method="post">
        <input type="hidden" name="form-name" value="editing" />

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
          <input name="music-video-editing" type="checkbox" className="custom-control-input" id="music-video-editing" />
          <label className="custom-control-label" htmlFor="music-video-editing">
            Music video editing
          </label>
        </p>

        <p className="custom-control custom-checkbox">
          <input name="film-video-editing" type="checkbox" className="custom-control-input" id="film-video-editing" />
          <label className="custom-control-label" htmlFor="film-video-editing">
            Film editing
          </label>
        </p>

        <p className="custom-control custom-checkbox">
          <input name="thriller-video" type="checkbox" className="custom-control-input" id="thriller-video" />
          <label className="custom-control-label" htmlFor="thriller-video">
            Thriller video
          </label>
        </p>

        <p className="custom-control custom-checkbox">
          <input name="photo-editing" type="checkbox" className="custom-control-input" id="photo-editing" />
          <label className="custom-control-label" htmlFor="photo-editing">
            Photo editing
          </label>
        </p>

        <p>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input name="email" type="email" id="email" required placeholder="* Enter your email" className="form-control" />
        </p>

        <p>
          <label htmlFor="link" className="sr-only">
            Link to reference video
          </label>
          <input name="link-to-reference-video" type="text" id="link" placeholder="Link to reference video (optional)" className="form-control" />
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

export default Editing
