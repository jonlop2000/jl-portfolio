import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-side">
        <div className="logo">
          <div className="logo-text">JL</div>
        </div>

        <Link
          to="home"
          smooth={true}
          duration={500}
          className="nav-item hide-on-mobile"
        >
          HOME
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="nav-item hide-on-mobile"
        >
          ABOUT
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="nav-item hide-on-mobile "
        >
          PROJECT
        </Link>
      </div>
      <Link to="contact" smooth={true} duration={500} className="nav-item ">
        <img
          className="email hide-on-mobile"
          alt="Email"
          src="https://generation-sessions.s3.amazonaws.com/33d2908413a6d70fac3fb4d2e323bc4b/img/email@2x.png"
        />
      </Link>
    </div>
  );
};

export default Navbar;
