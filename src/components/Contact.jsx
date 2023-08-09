import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-desc-text">
        <div className="contact-heading">
          <h1 className="contact-title">CONTACT</h1>
          <div className="contact-subtitle">Let's Chat!</div>
        </div>
        <p className="contact-information">
          Are you in need of a skilled full-stack developer or freelancer? Don't
          hesitate to reach out to me. Whether you're seeking to build a
          personal portfolio, launch a fully operational e-commerce website, or
          bring a unique creative idea to life, I am equipped to make it happen.
          Let's collaborate and turn your vision into reality.
        </p>
      </div>
      {/* <div className="contact-desc"> */}

      <div className="email-section">
        <div className="resume">
          <span className="resume-header">RESUME</span>
          <span className="space">&nbsp;</span>
        </div>
        <p className="additional">
          ANY ADDITIONAL INFORMATION/RESUME CAN BE PROVIDED UPON REQUEST
        </p>
        <div className="email-header">EMAIL</div>
        <div className="email">jonlop2000@gmail.com</div>
      </div>
    </div>
    // </div>
  );
};

export default Contact;
