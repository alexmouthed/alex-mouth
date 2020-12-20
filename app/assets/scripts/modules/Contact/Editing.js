import React, { useEffect } from "react"

function Editing() {
  return (
    <>
      <h3 className="display-4 text-center mb-3 text-yellow">Editing</h3>
      <form className="text-white col-sm-8 col-md-6 col-lg-5 col-xl-4 mx-auto" name="editing" method="post">
        <input type="hidden" name="editing" value="contact" />

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
    </>
  )
}

export default Editing
