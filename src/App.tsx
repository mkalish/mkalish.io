import React from 'react';

import './App.scss';
import { Container, Col, Row } from 'reactstrap';

const App: React.FC = () => {
  return (
    <Container>
      <div
        className="d-md-block d-none"
        style={{ height: '2rem', width: '100%' }}></div>
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
            <h4>Skills</h4>
            <ul className="pl-3">
              <li>Scala</li>
              <li>Javascript/Tyepscript</li>
              <li>React</li>
              <li>Docker</li>
              <li>AWS</li>
            </ul>
            <h4 className="mb-0">Volunteer</h4>
            <ul className="pl-3">
              <li>Code for DC Brigade Co-Captain</li>
              <li>Code4Life Instructor</li>
            </ul>
            <h2>Projects</h2>
            <h3 className="mb-0">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://ancfinder.org">
                ANC Finder
              </a>
            </h3>
            <p>
              Tool to enable residents of the District of Columbia to find their
              ANC.
            </p>
            <h3 className="mb-0">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://data.codefordc.org">
                Open Data DC
              </a>
            </h3>
            <p>Open data portal maintained by Code for DC.</p>
            <h3 className="mb-0">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://dc-campaign-finance.codefordc.org">
                DC Campaign Finance
              </a>
            </h3>
            <p>
              Data visualizations based on DC Board of Elections campaign
              contribution data.
            </p>
            <div className="py-2">
              <a
                target="_blank"
                className="pb-3"
                rel="noopener noreferrer"
                href={`${process.env.PUBLIC_URL}/resume.pdf`}>
                Resume
              </a>
            </div>
          </div>
        </Col>
        <Col>
          <h2>Summary</h2>
          <p className="description">
            Michael Kalish is a software engineer with experience crafting
            high-quality applications using a variety of technologies, such as
            Scala, React and Docker, as well as leading high-performing,
            cross-functional teams.
          </p>
          <h2>Experience</h2>
          <h3>Principal Software Engineer, Learning Objects Inc.</h3>
          <h5 className="mb-0">Washington, D.C., 2016-Present</h5>
          <p>
            Led cross-functional engineering teams to deliver high-value
            features for an analytics-driven learning management platform that
            provides valuable insights to content developers and instructors.
          </p>
          <ul>
            <li>
              Designed and implemented a continuous delivery pipeline using
              Jenkins, AWS EKS, and Docker containers that improved the release
              cadence from six weeks to daily
            </li>
            <li>
              Implemented a custom fetch library in Typescript used to provide a
              consistent way for teams to interact with a backend API to
              increase the velocity of development
            </li>
            <li>
              Wrote the front-end components and a backend API in React and
              Scala to enable instructors to make customizations to centrally
              authored education content to increase the adoption of Open
              Education Resources
            </li>
            <li>
              Responsible for hiring decisions and mentoring a cross-functional
              team; team successes include: 100% automated coverage of multiple
              applications using Selenium and a performance suite using Gatling
            </li>
          </ul>
          <h3>Senior Software Engineer, Learning Objects Inc.</h3>
          <h5 className="mb-0">Washington, D.C., 2015-2016</h5>
          <p>
            Worked primarily in React and Scala on a high-functioning team
            tasked with creating and maintaining a competency-driven learning
            management platform.
          </p>
          <ul>
            <li>
              Re-implemented the API and designed an immutable data model for a
              content management tool using Scala and Postgres to enable
              learning designers and instructors to track the efficacy of
              content changes over time
            </li>
            <li>
              Implemented both the front-end components and backend API in React
              and Scala, respectively, for a competency-aligned grading rubric
              that enabled instructors to assess the efficacy of their teaching
              by linking it to competencies tied to grading criteria
            </li>
          </ul>
          <h3>Consultant, Red Hat Inc.</h3>
          <h5 className="mb-0">Tyson's Corner, Virginia, 2015-2016</h5>
          <p>
            Worked with clients to evaluate, design, and develop software with
            an emphasis on utilizing the best open-source solutions available.
          </p>
          <ul>
            <li>
              Wrote key front-end architectural solutions in Angular, including
              a custom AJAX wrapper and core UI components, for the rewrite of a
              client’s customer-facing application and oversaw the team that
              used these components to build the functional areas of the
              application
            </li>
            <li>
              Implemented the front-end components and state management in
              Angular and RaphaelJS for an application that included an
              on-demand timeline of customer interactions
            </li>
            <li>
              Designed and implemented an internal tool using jQuery, Spring
              MVC, and Apache POI that converted raw customer service call times
              and outcomes into summative Excel reports
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
