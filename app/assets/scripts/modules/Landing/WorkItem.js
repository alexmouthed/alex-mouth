import React, { useEffect } from "react"
import Fade from "react-reveal/Fade"

function WorkItem(props) {
  if (props.left) {
    return (
      <Fade left>
        <div className="work-item rounded px-4 my-3">
          <a className="text--no-decoration" href={props.item.link}>
            {props.item.image && <img className="work-item__image" src={props.item.image} alt="" className="image-fluid" />}
            <h2 className="work-item__title">{props.item.title}</h2>
            <h3 className="work-item__role">Role: {props.item.role}</h3>
            <span className="work-item__date">Released {props.item.date}</span>
          </a>
        </div>
      </Fade>
    )
  } else {
    return (
      <Fade right>
        <div className="work-item py-3 rounded px-4 my-3">
          <a className="text--no-decoration" href={props.item.link}>
            {props.item.image && <img className="work-item__image" src={props.item.image} alt="" className="image-fluid" />}
            <h2 className="work-item__title">{props.item.title}</h2>
            <h3 className="work-item__role">Role: {props.item.role}</h3>
            <span className="work-item__date">Released {props.item.date}</span>
          </a>
        </div>
      </Fade>
    )
  }
}

export default WorkItem
