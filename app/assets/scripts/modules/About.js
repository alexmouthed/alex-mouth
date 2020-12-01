import React, { useEffect } from "react"
import Page from "./Page"
import Fade from "react-reveal/Fade"
import alexmouthFull from "../../images/alexmouth-full.jpg"

function About() {
  return (
    <Page title="About">
      <div className="container page-section page-section--more-p page-section-min-full">
        <h3 className="display-4 text-center">About Alexmouth</h3>
        <div className="row px-3 px-md-5 py-4">
          <div className="col-md-6 align-self-center">
            <img className="about__image" sizes="640px" src={alexmouthFull} alt="Alexmouth" />
          </div>
          <div className="col-md-6 align-self-center px-lg-5">
            <h3 className="display-4 pt-3">Alex Mouth (MBA)</h3>
            <p className="lead text-1-5">
              Currently working on <a href="https://www.strangetroublesthefilm.com">Strange Troubles</a>
            </p>
            <ul>
              <li className="text-1 text-storm lead">Film Director</li>
              <li className="text-1 text-storm lead">Movie Maker</li>
              <li className="text-1 text-storm lead">Product Manager</li>
              <li className="text-1 text-storm lead">Data Abstractor</li>
            </ul>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <Fade>
            <p className="lead text-justify px-md-1">Alex mouth is a seasoned film director, editor, producer with astonishing accomplishment in the entertainment industry.</p>
          </Fade>

          <Fade>
            <p className="lead text-justify px-md-1">He was the CEO of Blast Media, a production and Artist management firm that produced films, music videos, stages events and managed the likes of Sheila Kwamboka of Big Brother Africa and noted actresses like Lilian Esoro.</p>
          </Fade>

          <Fade>
            <p className="lead text-justify px-md-1">In 2012, he produced and directed the advocacy film ‘My Vote Counts’, a 15 minute Voters Education Video starring Nollywood entertainers like Julius Agwu, Adaora Ukoh and 2shot. The film was commissioned by USAID Nigeria and was premiered at the Ambassador's Compound in Abuja. Attendees included the US Ambassador to Nigeria, the U.S. Under Secretary of State and other American and Nigerian delegates.</p>
          </Fade>

          <Fade>
            <p className="lead text-justify px-md-1">Alex's television projects include Idols MTN Project Fame-2008, popular talk show, Moments with Mo, World Miss University Nigeria 2007-2008, Play Vibes - 2007 and D Gospel - 2006. Alex also directed the documentary After Conflict (for the British Council of Nigeria).</p>
          </Fade>

          <Fade>
            <p className="lead text-justify px-md-1">Apart from being a renowned film director, Alex is also a result oriented Scrum Master with years of experience in software development and implementations for internal, external and offshore clients. He possesses strong skills in requirements gathering, business process improvement, user experience, writing user stories, data analytic, database management and Agile/Lean transformation for education, information technology, oil and gas, health care and financial services.</p>
          </Fade>

          <Fade>
            <p className="lead text-justify px-md-1">A flexible and versatile man, hes also a Certified Information Systems Auditor and controls specialist with years of experience in management information systems audit and risk assessment.</p>
          </Fade>

          <Fade>
            <p className="lead text-justify px-md-1">Alex mouth is a fun man, easy to work with and a result oriented director whose accomplishments precedes him everywhere he has worked.</p>
          </Fade>
        </div>
      </div>
    </Page>
  )
}

export default About
