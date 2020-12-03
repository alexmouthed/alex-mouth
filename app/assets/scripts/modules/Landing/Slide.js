import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SlidingVideo from "./SlidingVideo"
import SvgImg from "../SVGIMG"

const videoLinks = ["https://www.youtube.com/embed/Xq4ADSa1yO4", "https://www.youtube.com/embed/IIrfZNRtWpE", "https://www.youtube.com/embed/2TXvV9wZxVk", "https://www.youtube.com/embed/jTIktE4u7Sc", "https://www.youtube-nocookie.com/embed/IIrfZNRtWpE"]

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 8000,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: "ondemand"
    }

    return (
      <div id="look-what-we-made" className="page-section page-section--video">
        <div className="container d-flex height-min container--border">
          <div className="w-100 align-self-center">
            <Slider {...settings}>
              <SlidingVideo link={videoLinks[0]} />
              <SlidingVideo link={videoLinks[1]} />
              <SlidingVideo link={videoLinks[2]} />
              <SlidingVideo link={videoLinks[3]} />
              <SlidingVideo link={videoLinks[4]} />
            </Slider>
          </div>
        </div>
        <p className="text-center">
          <a href="#filmography" className="text-white btn-scroll">
            {SvgImg.arrow}
          </a>
          <br />
          <span className="pt-3 text-white d-block lead font-weight-bold">See more</span>
        </p>
      </div>
    )
  }
}
