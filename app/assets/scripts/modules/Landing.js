import React, { useEffect } from "react"
import BigImage from "./Landing/BigImage"
import BriefDescription from "./Landing/BriefDescription"
import Filmography from "./Landing/Filmography"
import Slide from "./Landing/Slide"
import Page from "./Page"

function Landing() {
  return (
    <Page title="Home">
      <BigImage />
      <BriefDescription />
      <Slide />
      <Filmography />
    </Page>
  )
}

export default Landing
