import React, { useEffect } from "react"
import BigImage from "./Landing/BigImage"
import BriefDescription from "./Landing/BriefDescription"
const Filmography = React.lazy(() => import("./Landing/Filmography"))
const Slide = React.lazy(() => import("./Landing/Slide"))
import Page from "./Page"

function Landing() {
  return (
    <Page scroll={true} title="Home">
      <BigImage />
      <BriefDescription />
      <Slide />
      <Filmography />
    </Page>
  )
}

export default Landing
