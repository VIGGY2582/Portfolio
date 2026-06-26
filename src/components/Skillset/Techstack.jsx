import React from "react";
import { Row, Col } from "react-bootstrap";
import { DiJava, DiJavascript1, DiGit, DiDocker } from "react-icons/di";
import { SiReact, SiHtml5, SiCss3, SiBootstrap, SiSpring, SiNodedotjs, SiGo, SiPostgresql, SiPostman } from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <span className="skill-name">Java</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <span className="skill-name">JavaScript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <span className="skill-name">HTML5</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <span className="skill-name">CSS3</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <span className="skill-name">Bootstrap</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
        <span className="skill-name">React</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs />
        <span className="skill-name">Node.js</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <span className="skill-name">PostgreSQL</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
        <span className="skill-name">Spring Boot</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <span className="skill-name">Docker</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGo />
        <span className="skill-name">Golang</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <span className="skill-name">Git</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <span className="skill-name">Postman</span>
      </Col>
    </Row>
  );
};

export default Techstack;
