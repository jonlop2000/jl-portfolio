// Skills.js

import React from "react";
import LinePattern from "./LinePattern";

const Skills = () => {
  return (
    <LinePattern
      className
      lengths={[
        [20, 70],
        [30, 60],
        [40, 50],
      ]}
    >
      <div className="skills-container hide-on-mobile">
        <div className="title hide-on-mobile">CODING LANGUAGES/FRAMEWORKS</div>
        <div className="skill-set hide-on-mobile">
          <div className="skill hide-on-mobile">JAVASCRIPT</div>
          <div className="skill hide-on-mobile">PYTHON</div>
          <div className="skill hide-on-mobile">JAVA</div>
          <div className="skill hide-on-mobile">HTML</div>
          <div className="skill hide-on-mobile">CSS</div>
          <div className="skill hide-on-mobile">SQL</div>
        </div>
      </div>

      <div className="skills-container hide-on-mobile">
        <div className="title hide-on-mobile">FRAMEWORKS</div>
        <div className="skill-set hide-on-mobile">
          <div className="skill hide-on-mobile">REACT</div>
          <div className="skill hide-on-mobile">DJANGO</div>
          <div className="skill hide-on-mobile">NEXTJS</div>
        </div>
      </div>

      <div className="skills-container">
        <div className="title hide-on-mobile ">SOCIALS</div>
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
