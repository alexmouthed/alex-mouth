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
            <p className="lead text-justify px-md-1">Alex mouth is a seasoned film director, editor, and producer whose accomplishment in the movie industry is astonishing.</p>
          </Fade>

          <Fade>
            <p className="lead text-justify px-md-1">He's also a Certified Information Systems Auditor and controls specialist with years of experience in management information systems audit and risk assessment. In-depth knowledge of Sarbanes-Oxley Act (SOX), HIPAA, Control assessment, IT General Controls (ITGC), SSAE18 attestation, PCI DSS, NIST 800-53 and ERP security assessments using COBIT frameworks. Proven track record assessing system security and data integrity and to identify, manage and reduce vulnerabilities and ensure general compliance. Extensive background in all stages of an audit including planning, risk assessment, evaluating, testing of controls, report writing, and follow-up.</p>
          </Fade>

          <Fade>
            <p className="lead text-justify px-md-1">A results oriented Scrum Master with years of experience in software development and implementations for internal, external and offshore clients. Strong skills in requirements gathering, business process improvement, user experience, writing user stories, data analytic, database management and Agile/Lean transformation for education, information technology, oil and gas, health care and financial services.</p>
          </Fade>

          <Fade>
            <p className="lead text-justify px-md-1">Alex was one of the directors of Nigeria's most popular TV Soap Opera, Tinsel (TV Series), produced by South African conglomerate Multichoice.</p>
          </Fade>

          <Fade>
            <p className="lead text-justify px-md-1">In 2011, Alex Mouth produced and directed the advocacy film 'My Vote Fit Change Naija[1 1]', a 15-minute Voters Education Video starring Nollywood entertainers. The film was commissioned by NDI and was premiered at the Ambassador's Compound in Abuja.</p>
          </Fade>

          <Fade>
            <p className="lead text-justify px-md-1">Alex Mouth's television projects include Idols MTN Project Fame-2008, popular talk show, Moments with Mo, World Miss University Nigeria 2007-2008, Play Vibes - 2007 and D Gospel - 2006. Alex also directed the documentary After Conflict (for the British Council of Nigeria).</p>
          </Fade>

          <Fade>
            <p className="lead text-justify px-md-1">Alex Mouth Directorial debut began in the year 2001 creating Nollywood films.</p>
          </Fade>
        </div>
      </div>
    </Page>
  )
}

export default About
