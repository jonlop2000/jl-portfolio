// Skills.js

import React from "react";
import LinePattern from "./LinePattern";

const Skills = () => {
  return (
    <LinePattern
      lengths={[
        [20, 70],
        [30, 60],
        [40, 50],
      ]}
    >
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
      </div>

      <div className="skills-container">
        <div className="title">FRAMEWORKS</div>
        <div className="skill-set">
          <div className="skill">REACT</div>
          <div className="skill">DJANGO</div>
          <div className="skill">NEXTJS</div>
        </div>
      </div>

      {/* Third layer is empty in this case, but you can add content here */}
      <div className="skills-container">
        <div className="title">SOCIALS</div>
        <div className="skill-set">
          <div className="social-link">LINKEDIN</div>
          <img
            className="icon-circle"
            alt="Icon circle linkedin"
            src="https://generation-sessions.s3.amazonaws.com/33d2908413a6d70fac3fb4d2e323bc4b/img/---icon--circle-linkedin-@2x.png"
          />
          <div className="social-link">GITHUB</div>
          <img
            className="icon-circle"
            alt="Icon circle"
            src="https://generation-sessions.s3.amazonaws.com/33d2908413a6d70fac3fb4d2e323bc4b/img/---icon--circle-githubalt-@2x.png"
          />
        </div>
      </div>
    </LinePattern>
  );
};

export default Skills;
