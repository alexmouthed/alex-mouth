import React, { useEffect, useState } from "react"
import Zoom from "react-reveal/Zoom"
import SvgImg from "../SVGIMG"
import filmData from "./filmData"
import WorkItem from "./WorkItem"

function Filmography() {
  return (
    <div id="filmography" className="page-section">
      <Zoom top>
        <h3 className="text-center py-4 display-4">
          <span className="text--icon">{SvgImg.film}</span> Filmography
        </h3>
      </Zoom>
      <div className="px-sm-3">
        <div className="work-item__container justify-content-between">
          {filmData.map((item, index) => {
            if (index % 2 === 0) {
              return <WorkItem key={item.title} left={true} item={{ title: item.title, role: item.role, date: item.date, link: item.link, image: item.image ? item.image : null }} />
            } else {
              return <WorkItem key={item.title} item={{ title: item.title, role: item.role, date: item.date, link: item.link, image: item.image ? item.image : null }} />
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Filmography
