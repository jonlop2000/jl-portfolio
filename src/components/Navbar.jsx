import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-side">
        <div className="logo">
          <div className="logo-text">JL</div>
        </div>
        <div className="nav-item">HOME</div>
        <div className="nav-item">ABOUT</div>
        <div className="nav-item">PROJECTS</div>
      </div>
      <img
        className="email"
        alt="Email"
        src="https://generation-sessions.s3.amazonaws.com/33d2908413a6d70fac3fb4d2e323bc4b/img/email@2x.png"
      />
    </div>
  );
};

export default Navbar;
