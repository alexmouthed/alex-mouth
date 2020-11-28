import React, { useEffect } from "react"
import alexMouth from "../../../images/alexmouth.jpg"

function BriefDescription() {
  return (
    <div className="page-section container">
      <div className="row px-3">
        <div className="col-md">
          <img className="img-fluid" sizes="637px" src={alexMouth} alt="Alexmouth" />
        </div>
        <div className="col-md align-self-center pl-lg-5 mt-3 mt-md-0">
          <h3 className="display-4 text-storm">Alexmouth is a renowned film director, an influencer and a movie maker popularly known for his strong reputation in the industry.</h3>
        </div>
      </div>
    </div>
  )
}

export default BriefDescription
