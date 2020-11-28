import React, { useEffect } from "react"
import BigImage from "./Landing/BigImage"
import BriefDescription from "./Landing/BriefDescription"
import Page from "./Page"

function Landing() {
  return (
    <Page title="Home">
      <BigImage />
      <BriefDescription />
    </Page>
  )
}

export default Landing
