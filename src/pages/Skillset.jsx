import React from "react";
import { Container, Row } from "react-bootstrap";

import Particle from '../components/Particle';
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import CodingProfiles from "../components/Skillset/CodingProfiles";
import Leetcode from "../components/Skillset/Leetcode";
import Github from "../components/Skillset/Github";

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Section 1: Professional Skillset */}
        <Row className="skill-section justify-content-center">
          <h1 className="project-heading text-center">
            Professional <strong className="yellow">Skillset </strong>
          </h1>
          <Techstack />
        </Row>

        {/* Section 2: Tools I Use */}
        <Row className="skill-section justify-content-center">
          <h1 className="project-heading text-center">
            <strong className="yellow">Tools</strong> I Use
          </h1>
          <Toolstack />
        </Row>

        {/* Section 3: Coding Profiles */}
        <Row className="skill-section justify-content-center">
          <h1 className="project-heading text-center">
            Coding <strong className="yellow">Profiles</strong>
          </h1>
          <CodingProfiles />
        </Row>

        {/* Section 4: LeetCode Stats */}
        <Row className="skill-section justify-content-center">
          <Leetcode />
        </Row>

        {/* Section 5: GitHub Contributions */}
        <Row className="skill-section justify-content-center">
          <Github />
        </Row>
      </Container>
    </Container>
  );
};

export default Skillset;