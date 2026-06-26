import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJava, DiJavascript1, DiNodejs, DiGit, DiDocker } from "react-icons/di";
import { SiSpringboot, SiPostgresql, SiHtml5, SiCss3, SiBootstrap, SiMongodb, SiGolang, SiJwt, SiGit, SiPostman } from "react-icons/si";
import { FaReact, FaJava } from "react-icons/fa";

// Skill categories based on user-provided list
const categories = [
  {
    title: "Languages",
    items: [
      { icon: <FaJava />, label: "Java" },
      { icon: <DiJavascript1 />, label: "JavaScript" },
      { icon: <SiGolang />, label: "Golang" },
      { icon: <DiDocker />, label: "C" }, // using Docker icon as placeholder for C
      { icon: <SiMongodb />, label: "SQL" }, // MongoDB icon used as generic database icon for SQL
    ],
  },
  {
    title: "Frontend",
    items: [
      { icon: <FaReact />, label: "React.js" },
      { icon: <SiHtml5 />, label: "HTML5" },
      { icon: <SiCss3 />, label: "CSS3" },
      { icon: <SiBootstrap />, label: "Bootstrap" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: <SiSpringboot />, label: "Spring Boot" },
      { icon: <DiNodejs />, label: "Node.js" },
      { icon: <DiDocker />, label: "Golang" },
      { icon: <SiJwt />, label: "REST APIs" },
      { icon: <SiJwt />, label: "JWT Authentication" },
    ],
  },
  {
    title: "Database",
    items: [
      { icon: <SiPostgresql />, label: "PostgreSQL" },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: <DiGit />, label: "Git" },
      { icon: <SiGit />, label: "GitHub" },
      { icon: <DiDocker />, label: "Docker" },
      { icon: <SiPostman />, label: "Postman" },
    ],
  },
];

const Techstack = () => {
  return (
    <div className="techstack-section" style={{ paddingBottom: "50px" }}>
      {categories.map((cat, idx) => (
        <div key={idx} style={{ marginBottom: "30px" }}>
          <h4 className="tech-category-title">{cat.title}</h4>
          <Row className="justify-content-center">
            {cat.items.map((skill, i) => (
              <Col xs={4} md={2} className="tech-icons" key={i} style={{ textAlign: "center", marginBottom: "15px" }}>
                {skill.icon}
                <p style={{ fontSize: "0.75rem", marginTop: "5px" }}>{skill.label}</p>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

export default Techstack;
