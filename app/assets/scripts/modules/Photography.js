import React, { useEffect } from "react"

function Photography() {
  return (
    <>
      <h3 className="display-4 text-center mt-5 mb-3 text-rust">Photography</h3>
      <form className="text-white col-sm-8 col-md-6 col-lg-5 col-xl-4 mx-auto" name="photography" method="post">
        <input type="hidden" name="form-name" value="photography" />

        <p>
          <label htmlFor="budget" className="sr-only">
            Budget
          </label>
          <input name="budget" type="text" id="budget" required placeholder="* Enter your budget" className="form-control" />
        </p>

        <p>
          <label htmlFor="photo-genre" className="sr-only">
            Photo genre
          </label>
          <input name="photo-genre" type="text" id="photo-genre" required placeholder="* Enter the photo genre" className="form-control" />
        </p>

        <p>
          <label htmlFor="location" className="sr-only">
            Enter location
          </label>
          <input name="location" type="text" id="location" required placeholder="* Enter location" className="form-control" />
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

export default Photography
