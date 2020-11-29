import React, { useEffect } from "react"
import Page from "./Page"
import alexmouthFull from "../../images/alexmouth-full.jpg"

function About() {
  return (
    <Page title="About">
      <div className="container page-section page-section--more-p page-section-min-full">
        <h3 className="display-4 text-center">About Alexmouth</h3>
        <div className="row py-4">
          <div className="col-md-5 align-self-center">
            <img className="img-fluid" sizes="640px" src={alexmouthFull} alt="Alexmouth" />
          </div>
          <div className="col-md-7 align-self-center px-lg-5">
            <p className="lead text-justify px-3 px-md-1">Alex mouth is a seasoned film director, editor, and producer whose accomplishment in the movie industry is astonishing. He's also a Certified Information Systems Auditor and controls specialist with years of experience in management information systems audit and risk assessment. In-depth knowledge of Sarbanes-Oxley Act (SOX), HIPAA, Control assessment, IT General Controls (ITGC), SSAE18 attestation, PCI DSS, NIST 800-53 and ERP security assessments using COBIT frameworks. Proven track record assessing system security and data integrity and to identify, manage and reduce vulnerabilities and ensure general compliance. Extensive background in all stages of an audit including planning, risk assessment, evaluating, testing of controls, report writing, and follow-up. A results oriented Scrum Master with years of experience in software development and implementations for internal, external and offshore clients. Strong skills in requirements gathering, business process improvement, user experience, writing user stories, data analytic, database management and Agile/Lean transformation for education, information technology, oil and gas, health care and financial services.</p>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <p className="lead text-justify px-md-1">Alex was one of the directors of Nigeria's most popular TV Soap Opera, Tinsel (TV Series), produced by South African conglomerate Multichoice.</p>
          <p className="lead text-justify px-md-1">In 2011, Alex Mouth produced and directed the advocacy film 'My Vote Fit Change Naija', a 15-minute Voters Education Video starring Nollywood entertainers. The film was commissioned by NDI and was premiered at the Ambassador's Compound in Abuja.</p>
          <p className="lead text-justify px-md-1">Alex Mouth's television projects include Idols MTN Project Fame-2008, popular talk show, Moments with Mo, World Miss University Nigeria 2007-2008, Play Vibes - 2007 and D Gospel - 2006. Alex also directed the documentary After Conflict (for the British Council of Nigeria).</p>
          <p className="lead text-justify px-md-1">Alex Mouth Directorial debut began in the year 2001 creating Nollywood films.</p>
        </div>
      </div>
    </Page>
  )
}

export default About
