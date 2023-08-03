import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";

const Projects = () => {
  return (
    <div className="project">
      <div className="project-wrapper">
        <div className="projects">PROJECTS</div>
        <div className="years">© 2022-2023</div>
      </div>
      <div className="project-section">
        <div className="project-section">
          <div className="project-details">
            <div className="project-title">01 CCA DASHBOARD</div>
            <div className="project-years">2023</div>
            <div className="project-description">FULLSTACK</div>
            <AiOutlineArrowRight className="arrow" />
          </div>
          <div className="line" />
        </div>
        <div className="project-section">
          <div className="project-details">
            <div className="project-title">02 DUVAD SERVICES</div>
            <div className="project-years">2023</div>
            <div className="project-description">ECOMMERCE</div>
            <AiOutlineArrowRight className="arrow" />
          </div>
          <div className="line" />
        </div>
        <div className="project-section">
          <div className="project-category">CLONES</div>
          <div className="line" />
        </div>
        <div className="project-section">
          <div className="project-details">
            <div className="project-title">03 SPOTIFY</div>
            <div className="project-years">2022</div>
            <div className="project-description">CLONE</div>
            <AiOutlineArrowRight className="arrow" />
          </div>
          <div className="line" />
        </div>
        <div className="project-section">
          <div className="project-details">
            <div className="project-title">04 NETFLIX</div>
            <div className="project-years">2022</div>
            <div className="project-description">CLONE</div>
            <AiOutlineArrowRight className="arrow" />
          </div>
          <div className="line" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
