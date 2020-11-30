import React, { useEffect } from "react"
import BigImage from "./Landing/BigImage"
import BriefDescription from "./Landing/BriefDescription"
import Filmography from "./Landing/Filmography"
import Testimonials from "./Landing/Testimonials"
import Page from "./Page"

function Landing() {
  return (
    <Page title="Home">
      <BigImage />
      <BriefDescription />
      {/* <Testimonials /> */}
      <Filmography />
    </Page>
  )
}

export default Landing
