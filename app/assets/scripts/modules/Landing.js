import React, { useEffect } from "react"
import BigImage from "./Landing/BigImage"
import BriefDescription from "./Landing/BriefDescription"
import Filmography from "./Landing/Filmography"
import Page from "./Page"

function Landing() {
  return (
    <Page title="Home">
      <BigImage />
      <BriefDescription />
      <Filmography />
    </Page>
  )
}

export default Landing
