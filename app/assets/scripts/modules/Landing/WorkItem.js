import React, { useEffect } from "react"
import Fade from "react-reveal/Fade"
import { LazyLoadImage } from "react-lazy-load-image-component"

function WorkItem(props) {
  if (props.left) {
    return (
      <Fade left>
        <div className="card work-item">
          {props.item.link ? (
            <a className="text--no-decoration" href={`/video-reel#${props.item.title}`}>
              {props.item.image && <LazyLoadImage src={props.item.image} alt={props.item.title} className="image-fluid card-img-top work-item__image" />}
              <div className="card-body">
                <h4 className="card-title work-item__title">{props.item.title}</h4>
                <h5 className="work-item__role">Role: {props.item.role}</h5>
                <span className="work-item__date">Released {props.item.date}</span>
              </div>
            </a>
          ) : (
            <div className="text--no-decoration">
              {props.item.image && <LazyLoadImage src={props.item.image} alt={props.item.title} className="image-fluid card-img-top work-item__image" />}
              <div className="card-body">
                <h4 className="card-title work-item__title">{props.item.title}</h4>
                <h5 className="work-item__role">Role: {props.item.role}</h5>
                <span className="work-item__date">Released {props.item.date}</span>
              </div>
            </div>
          )}
        </div>
      </Fade>
    )
  } else {
    return (
      <Fade right>
        <div className="card work-item">
          {props.item.link ? (
            <a className="text--no-decoration" href={`/video-reel#${props.item.title}`}>
              {props.item.image && <LazyLoadImage src={props.item.image} alt={props.item.title} className="image-fluid card-img-top work-item__image" />}
              <div className="card-body">
                <h4 className="card-title work-item__title">{props.item.title}</h4>
                <h5 className="work-item__role">Role: {props.item.role}</h5>
                <span className="work-item__date">Released {props.item.date}</span>
              </div>
            </a>
          ) : (
            <div className="text--no-decoration">
              {props.item.image && <LazyLoadImage src={props.item.image} alt={props.item.title} className="image-fluid card-img-top work-item__image" />}
              <div className="card-body">
                <h4 className="card-title work-item__title">{props.item.title}</h4>
                <h5 className="work-item__role">Role: {props.item.role}</h5>
                <span className="work-item__date">Released {props.item.date}</span>
              </div>
            </div>
          )}
        </div>
      </Fade>
    )
  }
}

export default WorkItem
