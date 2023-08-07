import React, { useState } from "react";

import { AiOutlineArrowRight } from "react-icons/ai";
import Modal from "react-modal";

import dashboard0 from "../img/dashboard-0.PNG";
import dashboard1 from "../img/dashboard-1.PNG";
import dashboard2 from "../img/dashboard-2.PNG";

import duvad0 from "../img/duvad-0.PNG";
import duvad1 from "../img/duvad-1.PNG";
import duvad2 from "../img/duvad-2.PNG";
import duvad3 from "../img/duvad-3.PNG";
import duvad4 from "../img/duvad-4.PNG";
import duvad5 from "../img/duvad-5.PNG";

import netflix0 from "../img/netflix-0.PNG";
import netflix1 from "../img/netflix-1.PNG";
import netflix2 from "../img/netflix-2.PNG";
import netflix3 from "../img/netflix-3.PNG";
import netflix4 from "../img/netflix-4.PNG";

import spotify0 from "../img/spotify-0.png";
import spotify1 from "../img/spotify-1.png";
import spotify2 from "../img/spottify-2.png";

const projectData = [
  {
    title: "01 CCA DASHBOARD",
    years: "2023",
    description: "FULLSTACK",
    images: [dashboard0, dashboard1, dashboard2],
    languages: "React, Django, PostgreSQL",
    about: {
      intro:
        "Developed a dynamic dashboard designed to enhance CCA's live stream experience for their Collegiate Rocket League tournament. This project, contracted by Efuse from 2022-2023, is integral to the real-time display of team data, player statistics, current standings, and game scores.",
      keyFeatures: [
        "Frontend: Utilized React.js to create a seamless user interface. Incorporated a 'Send Live' component that pushes data to the scoreboard page, which is showcased during live streams.",
        "Backend API: Developed with Django REST Framework, this API efficiently retrieves data from the database and updates the frontend in real-time.",
        "Database: Employed PostgreSQL for reliable and scalable data storage.",
        "Data Retrieval & State Management: Leveraged Axios for HTTP requests and React Context API for robust state management.",
        "Authentication: Implemented Simple.JWT to manage login credentials, ensuring security and ease of access.",
        "Search Capability: Integrated Django Filters for efficient database search functionality.",
      ],
    },
  },

  {
    title: "02 DUVAD SERVICES",
    years: "2023",
    description: "ECOMMERCE",
    images: [duvad0, duvad5, duvad1, duvad3, duvad2, duvad4],
    languages: "NextJS, SanityIO, Stripe",
    about: {
      intro:
        "In collaboration with Duvad Services, I architected and developed a sophisticated e-commerce platform tailored to deliver a seamless online shopping experience.",
      keyFeatures: [
        "Server-Side Rendering: Leveraged the capabilities of Next.js to optimize performance and SEO through server-side rendering, ensuring faster page loads and enhanced user experience.",
        "Routing & Data Fetching: Utilized Next.js for its file-based routing system, streamlining page creation and data fetching processes.",
        "Payments & Checkout: Integrated Stripe to handle payments, manage products, and facilitate a smooth checkout process, delivering a secure and efficient transaction experience for users.",
        "Dynamic Content Management: Incorporated Sanity as the content management system, empowering the platform with dynamic content updates. This allowed for real-time modifications to product details, ensuring accurate and up-to-date information for customers.",
      ],
    },
  },

  {
    title: "03 SPOTIFY",
    years: "2022",
    description: "CLONE",
    languages: "NextJS, NextAuth, Spotify API",
    images: [spotify0, spotify1, spotify2],
    about: {
      intro:
        "I built a Spotify clone using Next.js. It captures the main features and design of the original, offering a familiar experience to users.",
      keyFeatures: [
        "Framework Choice: Used Next.js for its speed and scalability, making the app responsive and efficient.",
        "Smooth Sign-In: Integrated NextAuth for user authentication, providing a secure and straightforward sign-in process.",
        "Spotify Web API Integration: Connected with Spotify's API to bring in user data and music details, enhancing the overall experience.",
        "Music Controls: The clone has playback controls like play, skip, and stop. Just remember, you need an active Spotify session for these to work.",
        "Up-to-date Music Data: With the help of middleware and the Spotify API, users get real-time music updates, keeping the content fresh and current.",
      ],
    },
  },

  {
    title: "04 NETFLIX",
    years: "2022",
    description: "CLONE",
    languages: "NextJS, Prisma, MongoDB, Vercel",
    images: [netflix0, netflix1, netflix2, netflix3, netflix4],
    about: {
      intro:
        "I developed a Netflix clone using Next.js, accurately replicating its design and core features while integrating advanced technical functionalities.",
      keyFeatures: [
        "Design & Responsiveness: Used Tailwind CSS to style the app, ensuring it's visually appealing and works seamlessly across devices.",
        "Database Integration: Chose MongoDB as the database and integrated it using Prisma, a server-side library that makes data queries efficient and developer-friendly.",
        "User Authentication: Integrated NextAuth to offer users the option to log in using their Google or GitHub accounts. Makes the sign-in process simple and secure.",
        "Modern Tech Stack: The combo of Next.js, Tailwind CSS, Prisma, and MongoDB offers a robust and modern framework for web apps like this.",
      ],
    },
  },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % currentProject.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + currentProject.images.length) %
        currentProject.images.length
    );
  };
  const openModal = (project) => {
    document.body.style.overflow = "hidden";
    setCurrentProject(project);
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";
    setCurrentProject(null);
    setCurrentImageIndex(0); // Reset the current image index
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
                  <p>{project.languages}</p>
                  {project.about && <p>{project.about.intro}</p>}
                  {project.about && (
                    <ul>
                      {project.about.keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="modal-right">
                  {currentProject && (
                    <>
                      <img
                        src={currentProject.images[currentImageIndex]}
                        alt="Project Screenshot"
                      />

                      <div className="image-controls">
                        <button className="image-scroll" onClick={prevImage}>
                          &lt;
                        </button>{" "}
                        {/* Previous Image */}
                        <div className="dots">
                          {currentProject.images.map((_, index) => (
                            <span
                              key={index}
                              className={`dot ${
                                index === currentImageIndex ? "active" : ""
                              }`}
                            ></span>
                          ))}
                        </div>
                        <button className="image-scroll" onClick={nextImage}>
                          &gt;
                        </button>{" "}
                        {/* Next Image */}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <button className="close-modal-btn" onClick={closeModal}>
                X
              </button>
              {/* <button className="github-redirect">
                GITHUB{" "}
                <img
                  className="icon-circle"
                  alt="Icon circle"
                  src="https://generation-sessions.s3.amazonaws.com/33d2908413a6d70fac3fb4d2e323bc4b/img/---icon--circle-githubalt-@2x.png"
                />
              </button> */}
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
