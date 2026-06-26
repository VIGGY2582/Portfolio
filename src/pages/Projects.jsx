import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
import ProjectCard from "../components/Projects/ProjectCard";

const projects = [
  {
    title: "SkillScope – AI Skill Gap Analysis Platform",
    description: "AI‑driven platform that analyses resumes, identifies skill gaps and recommends personalized learning paths. Built with Java, Spring Boot, React and PostgreSQL.",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "AI"],
    ghLink: "https://github.com/VIGGY2582/Reculla_Project",
  },
  {
    title: "ERP Management System",
    description: "Full‑stack ERP solution for employee management, attendance, payroll and workflow automation. Front‑end with React, back‑end Node.js and PostgreSQL.",
    tech: ["React", "Node.js", "PostgreSQL"],
    ghLink: "https://github.com/VIGGY2582/Mini-ERP-From-Demand-to-Delivery---Odoo-x-KAHE-Coimbatore-Hackathon-26-",
  },
  {
    title: "Lost Item Finder",
    description: "Web app that enables users to report, search and claim lost‑and‑found items with secure authentication and real‑time updates.",
    tech: ["Spring Boot", "React", "PostgreSQL"],
    ghLink: "https://github.com/VIGGY2582/Lost_Item_finder",
  },
  {
    title: "City Connector",
    description: "Civic‑issue reporting platform allowing citizens to log infrastructure problems; admin dashboard tracks resolution.",
    tech: ["React", "Node.js", "PostgreSQL", "Bootstrap"],
    ghLink: "https://github.com/VIGGY2582/City_Connecter",
  },
  {
    title: "Doctor Appointment Booking System",
    description: "Healthcare booking platform for searching doctors, scheduling appointments and managing patient records.",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL"],
    ghLink: "https://github.com/VIGGY2582/Doctor_appoinment_booking",
  },
  {
    title: "JavaFX Web Browser",
    description: "Lightweight desktop browser built with JavaFX, featuring URL navigation, back/forward controls and a clean UI.",
    tech: ["Java", "JavaFX"],
    ghLink: "https://github.com/VIGGY2582/WebBrwser",
  },
];

const Projects = () => (
  <Container fluid className="project-section">
    <Particle />
    <Container>
      <h1 className="project-heading">
        Recent Top <strong className="yellow">Works</strong>
      </h1>
      <p style={{ color: "white" }}>Here are some projects I have built.</p>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {projects.map((proj, idx) => (
          <Col md={4} className="project-card" key={idx}>
            <ProjectCard
              title={proj.title}
              description={proj.description}
              ghLink={proj.ghLink}
            />
          </Col>
        ))}
      </Row>
    </Container>
  </Container>
);

export default Projects;