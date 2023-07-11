import React from "react";

import young from "../img/young.PNG";
import old from "../img/old.JPG";

const About = () => {
  return (
    <div className="about">
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
          in Full Stack development with a focus on design.{" "}
        </p>
      </div>
      <div className="old-section">
        <img className="old" src={old} />
        <div className="hobbies-title">INTERESTS/ HOBBIES</div>
        <h1 className="hobbies">
          -Music
          <br />
          -Video Games
          <br />
          -Sports
          <br />
          -Coding :D
        </h1>
      </div>
    </div>
  );
};

export default About;
