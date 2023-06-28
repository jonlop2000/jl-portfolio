import React from "react";
import Navbar from "./Navbar";
import Skills from "./Skills";
import SocialLinks from "./SocialLinks";

export const Frame = () => {
  return (
    <div>
      <Navbar />
      <img
        className="separator-line"
        alt="Line"
        src="https://generation-sessions.s3.amazonaws.com/33d2908413a6d70fac3fb4d2e323bc4b/img/line-19.svg"
      />
      <div className="main-frame">
        <div className="content-wrapper">
          <div className="text-section">
            <h1 className="name">JONATHAN LOPEZ</h1>
            <div className="role">FULLSTACK DEVELOPER</div>
            <p className="description">
              A motivated full-stack developer-in-training, deeply intrigued by
              the intersection of design and technology. I'm continually
              expanding my toolbox with skills and techniques to effectively
              bring my creative ideas to life.
            </p>
          </div>
          <div className="image-section">
            <img
              className="profile-image"
              alt="Image"
              src="https://generation-sessions.s3.amazonaws.com/33d2908413a6d70fac3fb4d2e323bc4b/img/image-1@2x.png"
            />
          </div>
        </div>
        <Skills />
        <div className="socials-label">SOCIALS</div>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Frame;
