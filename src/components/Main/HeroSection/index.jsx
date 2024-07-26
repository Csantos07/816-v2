import React from "react";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero-container" id="home">
      <div className="container">
        <img className="splash-img" src="/splash.svg" alt="" />
      </div>
      {/* <img className="splash-img" src="/splash.svg" alt="" /> */}
      <a
        href="https://816rehabandperformance.janeapp.com/#/staff_member/1/bio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="call-to-action">Free Discovery Call</button>
      </a>
    </div>
  );
};

export default HeroSection;
