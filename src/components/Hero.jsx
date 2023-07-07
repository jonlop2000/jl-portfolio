import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="time-version">
        <div className="time time-text">12:23PM</div>
        <div className="version">
          <div className="version-text">VERSION 1.0</div>
          <div className="year-text">2023</div>
        </div>
      </div>
      <div className="hero-section">
        <div className="name">JONATHAN LOPEZ</div>
        <div className="role">FULLSTACK DEVELOPER</div>
        <p className="hero-description">
          A motivated full-stack developer-in-training, deeply intrigued by the
          intersection of design and technology. I'm continually expanding my
          toolbox with skills and techniques to effectively bring my creative
          ideas to life.
        </p>
      </div>
    </div>
  );
};

export default Hero;
