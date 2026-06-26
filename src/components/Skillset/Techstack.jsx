import React from "react";
import { DiJava, DiJavascript1, DiGit, DiDocker } from "react-icons/di";
import { SiReact, SiHtml5, SiCss3, SiBootstrap, SiSpring, SiNodedotjs, SiGo, SiPostgresql, SiPostman } from "react-icons/si";

const skills = [
  { icon: <DiJava />, name: "Java" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <SiCss3 />, name: "CSS3" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiSpring />, name: "Spring Boot" },
  { icon: <DiDocker />, name: "Docker" },
  { icon: <SiGo />, name: "Golang" },
  { icon: <DiGit />, name: "Git" },
  { icon: <SiPostman />, name: "Postman" },
];

const Techstack = () => {
  return (
    <div className="skills-grid">
      {skills.map((skill, idx) => (
        <div key={idx} className="skill-box">
          {skill.icon}
          <span className="skill-name">{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Techstack;