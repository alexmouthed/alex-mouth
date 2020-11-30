import React, { useEffect } from "react"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"

function Testimonials() {
  return (
    <div className="page-section testimonies">
      <div className="container">
        <Zoom>
          <h2 className="display-4 text-center testimonies__title">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat-left-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            </svg>{" "}
            <strong>Testimonials</strong>
          </h2>
        </Zoom>

        <div className="row testimonies__content">
          <div className="col-lg-4">
            <Fade>
              <div className="person">
                <div className="person__photo">
                  <svg width="160px" height="160px" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                    <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                  </svg>
                </div>
                <h3 className="person__title">Misty Jack</h3>
                <h4 className="person__subtitle">9 Time Escaper</h4>
                <p>&ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pa sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&rdquo;</p>
              </div>
            </Fade>
          </div>
          <div className="col-lg-4">
            <Fade>
              <div className="person">
                <div className="person__photo">
                  <svg width="160px" height="160px" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                    <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                  </svg>
                </div>
                <h3 className="person__title">Misty Jack</h3>
                <h4 className="person__subtitle">9 Time Escaper</h4>
                <p>&ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&rdquo;</p>
              </div>
            </Fade>
          </div>
          <div className="col-lg-4">
            <Fade>
              <div className="person person--last">
                <div className="person__photo">
                  <svg width="160px" height="160px" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                    <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                  </svg>
                </div>
                <h3 className="person__title">Misty Jack</h3>
                <h4 className="person__subtitle">9 Time Escaper</h4>
                <p>&ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&rdquo;</p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
