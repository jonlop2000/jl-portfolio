import React from "react";
import Footer from "./Footer";

export const Main = () => {
  return (
    <div className="page-container">
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
              alt=""
              src="https://generation-sessions.s3.amazonaws.com/33d2908413a6d70fac3fb4d2e323bc4b/img/image-1@2x.png"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
