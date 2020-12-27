import React, { useEffect } from "react"

function Training() {
  return (
    <>
      <h3 className="display-4 text-center mt-5 mb-3 text-rust">Training</h3>
      <form className="text-white col-sm-8 col-md-6 col-lg-5 col-xl-4 mx-auto" name="training" method="post">
        <input type="hidden" name="form-name" value="training" />

        <p>
          <label htmlFor="name-of-student" className="sr-only">
            Your name
          </label>
          <input name="name-of-student" type="text" id="name-of-student" required placeholder="* Your name" className="form-control" />
        </p>

        <p>
          <label htmlFor="skill-type" className="sr-only">
            Enter skill
          </label>
          <input name="skill-type" type="text" id="skill-type" required placeholder="* Enter the skill you want to learn" className="form-control" />
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
          <textarea name="description" id="optional-description" placeholder="Description" cols="30" rows="4" className="form-control"></textarea>
        </p>

        <input type="submit" value="Submit" className="form-control mt-3 btn btn--red" />
      </form>
    </>
  )
}

export default Training
