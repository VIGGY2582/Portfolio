import React from "react";
import { DiJava, DiJavascript1, DiGit, DiDocker } from "react-icons/di";
import { SiReact, SiHtml5, SiCss3, SiBootstrap, SiSpring, SiNodedotjs, SiGo, SiPostgresql, SiPostman } from "react-icons/si";

const Techstack = () => {
  return (
    <>
  <div className="skills-grid">
  <div className="skill-box">
    <DiJava />
    <span className="skill-name">Java</span>
  </div>
  <div className="skill-box">
    <DiJavascript1 />
    <span className="skill-name">JavaScript</span>
  </div>
  <div className="skill-box">
    <SiHtml5 />
    <span className="skill-name">HTML5</span>
  </div>
  <div className="skill-box">
    <SiCss3 />
    <span className="skill-name">CSS3</span>
  </div>
  <div className="skill-box">
    <SiBootstrap />
    <span className="skill-name">Bootstrap</span>
  </div>
  <div className="skill-box">
    <SiReact />
    <span className="skill-name">React</span>
  </div>
  <div className="skill-box">
    <SiNodedotjs />
    <span className="skill-name">Node.js</span>
  </div>
  <div className="skill-box">
    <SiPostgresql />
    <span className="skill-name">PostgreSQL</span>
  </div>
  <div className="skill-box">
    <SiSpring />
    <span className="skill-name">Spring Boot</span>
  </div>
  <div className="skill-box">
    <DiDocker />
    <span className="skill-name">Docker</span>
  </div>
  <div className="skill-box">
    <SiGo />
    <span className="skill-name">Golang</span>
  </div>
  <div className="skill-box">
    <DiGit />
    <span className="skill-name">Git</span>
  </div>
  <div className="skill-box">
    <SiPostman />
    <span className="skill-name">Postman</span>
  </div>
</div>
    </>
  );
};

export default Techstack;