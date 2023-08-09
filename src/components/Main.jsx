import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export const Main = () => {
  return (
    <div>
      <Navbar />

      <div className="main-container">
        <div>
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
