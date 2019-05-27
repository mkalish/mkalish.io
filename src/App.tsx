import React from 'react';

import './App.scss';
import {
  Container,
  Col,
  Row
} from 'reactstrap';

const App: React.FC = () => {
  return (
    <Container>
      <div className="d-md-block d-none" style={{height: '2rem', width: '100%'}}></div>
      <Row>
        <Col sm="12" md="3">
          <h1>Michael Kalish</h1>
          <div className="d-md-block d-none">
            <h4 className="mb-0">Contact</h4>
            <p className="mb-0">kalishmichael@gmail.com</p>
            <p className="mb-0">(703) 463-0849</p>
            <p className="mb-0">github.com/mkalish</p>
            <p>linkedin.com/in/mqkalish</p>
            <h4 className="mb-0">Education</h4>
            <p className="mb-0">University of Virginia 2008–2012</p>
            <p className="mb-0">BA in Computer Science</p>
            <p>BA in Cognitive Science</p>
            <h4 className="mb-0">Volunteer</h4>
            <ul className="pl-3">
              <li>Code for DC Brigade Co-Captain</li>
              <li>Code4Life Instructor</li>
            </ul>
          </div>
        </Col>
        <Col>
          <h2>Summary</h2>
          <p className="description">Michael Kalish is a software engineer with experience in crafting high-quality applications as well as leading high-performing, cross-functional teams.</p>
          <h2>Experience</h2>
          <h3>Principal Software Engineer, Learning Objects Inc.</h3>
          <p className="mb-0">Washington, D.C., 2016-Present</p>
          <p>Led and contributed to a cross-functional engineering team to deliver high-value features; responsibilities included team mentorship, infrastructure maintenance, and technical architecture.</p>
          <h5>Projects Included</h5>
          <ul>
            <li>Analytics-driven content player and management system that provided insights to content developers and instructors</li>
            <li>Continuous Delivery pipeline that combined Jenkins and docker to build, execute tests and deploy code; improved average release cadence from six weeks to three days</li>
            <li>Led the adoption of typescript as the language of choice for writing frontend applications</li>
          </ul>
          <h3>Senior Software Engineer, Learning Objects Inc.</h3>
          <p className="mb-0">Washington, D.C., 2015-2016</p>
          <p>Worked primarily in React and Scala on a high-functioning team tasked with creating and maintaining Competency-Based Education platform.</p>
          <h5>Projects Included</h5>
          <ul>
            <li>Competency-aligned rubric implementation that enabled linking and assessing competencies tied to instructor graded criteria</li>
            <li>Competency authoring and management tool used by instructional designers to create competency rules and hierarchies</li>
          </ul>
          <h3>Consultant, Red Hat Inc.</h3>
          <p className="mb-0">Tyson's Corner, Virginia, 2015-2016</p>
          <p>Worked with clients to evaluate, design, and develop software with an emphasis on utilizing the best open-source solutions available.</p>
          <h5>Projects Included</h5>
          <ul>
            <li>UI Architect on the tiger team tasked with rewriting a client’s customer service application using .NET and AngularJS</li>
            <li>Application that included an on-demand timeline of customer interactions across all of the client’s points of contact</li>
            <li>Overhauled the design of a client’s customer service application</li>
          </ul>
          <h2>Projects</h2>
          <h3 className="mb-0"><a rel="noopener noreferrer" target="_blank" href="https://ancfinder.org">ANC Finder</a></h3>
          <p>Tool to enable residents of the District of Columbia to find their ANC.</p>
          <h3 className="mb-0"><a rel="noopener noreferrer" target="_blank" href="http://data.codefordc.org">Open Data DC</a></h3>
          <p>Open data portal maintained by Code for DC.</p>
          <h3 className="mb-0"><a rel="noopener noreferrer" target="_blank" href="https://dc-campaign-finance.codefordc.org">DC Campaign Finance</a></h3>
          <p>Data visualizations based on DC Board of Elections campaign contribution data.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
