import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I'm <span className="yellow">Vigneshwaran</span>, a B.Tech
              student in <span className="yellow">Computer Science and Business
              Systems</span> at <span className="yellow">Dr. N.G.P. Institute
              of Technology</span>, Coimbatore, Tamil Nadu, India.
              <br />
              <br />
              I'm a passionate <span className="yellow">Java Backend
              Developer</span> and <span className="yellow">Full‑Stack
              Developer</span> with expertise in Java, Spring Boot, React.js,
              Node.js, PostgreSQL, Golang, JavaScript, HTML, CSS, and RESTful
              APIs. I also work with Git, GitHub, Docker, and Postman, and I'm
              expanding my knowledge in Microsoft Azure and cloud technologies.
              <br />
              <br />
              Over the course of my academic journey I have built several full‑stack
              applications, including <span className="yellow">SkillScope</span>,
              <span className="yellow">City Connector</span>,
              <span className="yellow">ERP Management System</span>,
              <span className="yellow">Doctor Appointment Booking System</span>,
              <span className="yellow">Lost Item Finder</span>, and
              <span className="yellow">JavaFX Web Browser</span>. These projects
              have strengthened my skills in backend development, database design,
              and modern web technologies.
              <br />
              <br />
              I actively participate in hackathons such as the IBM Hackathon (finalist),Odoo Hackathon
              (finalist) and IISF S&T Hackathon (finalist). I'm eager to
              collaborate on innovative solutions and explore emerging fields like
              <span className="yellow"> Artificial Intelligence</span> and
              <span className="yellow"> Cloud Computing</span>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{' '}
              <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/VIGGY2582"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vigneshwaran-s-5b255b29a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;