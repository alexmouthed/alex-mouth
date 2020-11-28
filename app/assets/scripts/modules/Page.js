import React, { useEffect } from "react"
import Container from "./Container"

function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | Alexmouth`
    window.scrollTo(0, 0)
  }, [props.title])

  return <Container contain={props.contain}>{props.children}</Container>
}

export default Page
