import React from "react";
import "./Main.scss";
import HeroSection from "./HeroSection";
import Philosophy from "./Philosophy";
import Provider from "./Provider";

const Main = ({ shrinkMain }) => {
  return (
    <>
      <main className={`main ${shrinkMain ? "dropdown-visible" : ""}`}>
        <div className="main__content">
          <HeroSection />
          <Philosophy />
          <Provider />
        </div>
      </main>
    </>
  );
};

export default Main;
