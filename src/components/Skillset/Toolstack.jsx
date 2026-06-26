import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiVisualstudiocode, SiPostman, SiIntellijidea, SiCanva, SiPostgresql } from "react-icons/si";
import { DiDocker } from "react-icons/di";

const tools = [
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <AiFillGithub />, name: "GitHub" },
  { icon: <SiIntellijidea />, name: "IntelliJ IDEA" },
  { icon: <DiDocker />, name: "Docker" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiPostgresql />, name: "pgAdmin" },
  { icon: <SiCanva />, name: "Canva" },
];

const Toolstack = () => {
  return (
    <div className="tools-grid">
      {tools.map((tool, idx) => (
        <div key={idx} className="tool-box">
          {tool.icon}
          <span className="tool-name">{tool.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Toolstack;
