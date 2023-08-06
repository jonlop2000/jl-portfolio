import React, { useState } from "react";

import { AiOutlineArrowRight } from "react-icons/ai";
import Modal from "react-modal";

import dashboard0 from "../img/dashboard-0.PNG";
import dashboard1 from "../img/dashboard-1.PNG";
import dashboard2 from "../img/dashboard-2.PNG";

const projectData = [
  {
    title: "01 CCA DASHBOARD",
    years: "2023",
    description: "FULLSTACK",
    image1: dashboard0,
    image2: dashboard1,
    image3: dashboard2,
    languages: "React, Django, PostgreSQL, MongoDB",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "02 DUVAD SERVICES",
    years: "2023",
    description: "ECOMMERCE",
  },

  {
    title: "03 SPOTIFY",
    years: "2022",
    description: "CLONE",
  },

  {
    title: "04 NETFLIX",
    years: "2022",
    description: "CLONE",
  },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    document.body.style.overflow = "hidden";
    setCurrentProject(project);
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";

    setCurrentProject(null);
  };

  return (
    <div className="project">
      <div className="project-wrapper">
        <div className="projects">PROJECTS</div>
        <div className="years">© 2022-2023</div>
      </div>
      <div className="project-section">
        {projectData.map((project, index) => (
          <div key={index} className="project-section">
            <div className="project-details">
              <div className="project-title">{project.title}</div>
              <div className="project-years">{project.years}</div>
              <div className="project-description">{project.description}</div>
              <AiOutlineArrowRight
                className="arrow"
                onClick={() => openModal(project)}
              />
            </div>
            <div className="line" />
            <Modal
              isOpen={currentProject === project}
              onRequestClose={closeModal}
              contentLabel="Project Details"
              className="project-modal"
              overlayClassName="project-modal-overlay"
            >
              <div className="project-modal-content">
                <div className="modal-left">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <p className="modal-about">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="modal-right">
                  <img src={project.image1} />
                </div>
              </div>
              <button onClick={closeModal}>Close</button>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
