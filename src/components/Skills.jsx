import React from "react";
import LinePattern from "./LinePattern";

const Skills = () => {
  return (
    <div>
      <LinePattern
        lengths={[
          [60, 50],
          [30, 70],
          [40, 20],
        ]}
      />

      <div className="skills-container">
        <div className="title">CODING LANGUAGES/FRAMEWORKS</div>
        <div className="skill-set">
          <div className="skill">JAVASCRIPT</div>
          <div className="skill">PYTHON</div>
          <div className="skill">JAVA</div>
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">SQL</div>
        </div>
        <div className="title">FRAMEWORKS</div>
        <div className="skill-set">
          <div className="skill">REACT</div>
          <div className="skill">DJANGO</div>
          <div className="skill">NEXTJS</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
