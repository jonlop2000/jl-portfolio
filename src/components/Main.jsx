import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";

export const Main = () => {
  return (
    <div className="main-container">
      <Navbar />

      <div>
        <Hero />
      </div>
    </div>
  );
};

export default Main;
