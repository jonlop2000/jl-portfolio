import React, { useState, useEffect } from "react";

const Hero = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="hero">
      <div className="time-version">
        <div className="time time-text">{time.toLocaleTimeString()}</div>
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
