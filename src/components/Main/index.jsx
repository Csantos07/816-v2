import React from "react";
import "./Main.scss";
import Dropdown from "../Dropdown";
import FillerContent from "../FillerContent";
import HeroSection from "./HeroSection";
import Philosophy from "./Philosophy";
import Provider from "./Provider";

const Main = ({ dropdownVisible }) => {
  return (
    <>
      <main className={`main ${dropdownVisible ? "dropdown-visible" : ""}`}>
        <Dropdown dropdownVisible={dropdownVisible} />

        <div className={"main__content"}>
          <HeroSection />
          <Philosophy />
          <Provider />
        </div>
      </main>
    </>
  );
};

export default Main;
