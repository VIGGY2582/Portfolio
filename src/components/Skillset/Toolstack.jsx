import React from "react";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const Toolstack = () => {
  return (
    <div className="skills-grid">
      <div className="tool-box"><SiVisualstudiocode /></div>
      <div className="tool-box"><SiPostman /></div>
      <div className="tool-box"><SiVercel /></div>
      <div className="tool-box"><SiNetlify /></div>
      <div className="tool-box"><SiHeroku /></div>
    </div>
  );
};

export default Toolstack;
