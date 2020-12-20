import React, { useEffect } from "react"

function Directing() {
  return (
    <>
      <h3 className="display-4 text-center mb-3 text-yellow">Directing</h3>
      <form className="text-white col-sm-8 col-md-6 col-lg-5 col-xl-4 mx-auto" name="directing" method="post">
        <input type="hidden" name="directing" value="contact" />

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

        <div className="form-group mt-3">
          <label htmlFor="movie-budget" className="sr-only">
            Movie budget
          </label>
          <input name="movie-budget" type="text" id="movie-budget" required placeholder="* Enter your budget" className="form-control" />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="movie-genre" className="sr-only">
            Movie genre
          </label>
          <input name="movie-genre" type="text" id="movie-genre" required placeholder="* Enter the movie genre" className="form-control" />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="location" className="sr-only">
            Enter country and state of production
          </label>
          <input name="location" type="text" id="location" required placeholder="* Enter country and state of production" className="form-control" />
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
          <input name="link" type="text" id="link" placeholder="Link to reference video (optional)" className="form-control" />
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

export default Directing
