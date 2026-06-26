import React from "react";
import ReactMarkdown from 'react-markdown';

const Leetcode = () => {
  return (
    <div className="stats-container">
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="yellow">LeetCode</strong> Stats
      </h1>
      <div className="leetcode-card">
        <ReactMarkdown>
          {`![LeetCode Stats](https://leetcard.jacoblin.cool/VIGNESHWARACHAKRAVARTHY?theme=dark&font=Syne%20Mono&ext=heatmap)`}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Leetcode;
