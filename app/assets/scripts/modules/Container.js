import React, { useEffect } from "react"

function Container(props) {
  return <div className={"" + (props.contain ? "container" : "")}>{props.children}</div>
}

export default Container
