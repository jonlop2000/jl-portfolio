import React from "react";

import young from "../img/young.PNG";
import old from "../img/old.JPG";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="young-wrapper">
        <img className="young" src={young} />
      </div>
      <div className="content">
        <div className="title">ABOUT ME</div>
        <div className="birthdate">October 31, 2000</div>
        <div className="city">Los Angeles</div>
        <div className="name">JONATHAN ALEJANDRO LOPEZ</div>
        <p className="about-me">
          Recent graduate from San Jose State University. I am pursuing a career
          in Full Stack development with a focus on design. Hobbies include
          playing video games, listening to music, and playing sports
        </p>
      </div>
      <div className="old-section">
        <img className="old" src={old} />
      </div>
    </div>
  );
};

export default About;
