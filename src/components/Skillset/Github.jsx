import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <div className="stats-container">
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="yellow">Code</strong>
      </h1>
      <div className="github-calendar-wrapper">
        <GitHubCalendar
          username="VIGGY2582"
          blockSize={15}
          blockMargin={5}
          color="#6102ce"
          fontSize={16}
        />
      </div>
    </div>
  );
};

export default Github;
