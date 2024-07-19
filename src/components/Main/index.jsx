import React from "react";
import "./Main.scss";
import Dropdown from "../Dropdown";
import FillerContent from "../FillerContent";
import HeroSection from "./HeroSection";
import Philosophy from "./Philosophy";

const Main = ({ dropdownVisible }) => {
  return (
    <>
      <main className={`main ${dropdownVisible ? "dropdown-visible" : ""}`}>
        <Dropdown dropdownVisible={dropdownVisible} />
        {/* <div className={`main__content ${dropdownVisible ? "hidden" : ""}`}> */}
        <div className={"main__content"}>
          {/* Other components go here */}
          <HeroSection />
          <Philosophy />
          {/* <FillerContent />
          <FillerContent />
          <FillerContent />
          <FillerContent /> */}
        </div>
      </main>
    </>
  );
};

export default Main;
