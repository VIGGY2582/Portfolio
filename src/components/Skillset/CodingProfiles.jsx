import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

const CodingProfiles = () => {
  return (
    <div className="profiles-grid">
      <a href="https://github.com/VIGGY2582" target="_blank" rel="noopener noreferrer" className="profile-card">
        <AiFillGithub size={48} color="#fff" />
        <h4>GitHub</h4>
      </a>
      <a href="https://leetcode.com/VIGNESHWARACHAKRAVARTHY" target="_blank" rel="noopener noreferrer" className="profile-card">
        <SiLeetcode size={48} color="#fff" />
        <h4>LeetCode</h4>
      </a>
    </div>
  );
};

export default CodingProfiles;
