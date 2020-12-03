import React, { useEffect } from "react"

function SlidingVideo(props) {
  return (
    <>
      <div className="embed-responsive px-4 embed-responsive-21by9 video-slide__iframe mb-3 mx-auto">
        <iframe className="embed-responsive-item" src={props.link} frameBorder="0" allowFullScreen></iframe>
      </div>
    </>
  )
}

export default SlidingVideo
