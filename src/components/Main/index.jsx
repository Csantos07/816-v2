import React from "react";
import "./Main.scss";
import FillerContent from "../FillerContent";
import HeroSection from "./HeroSection";
import Philosophy from "./Philosophy";
import Provider from "./Provider";
import Dropdown from "../Dropdown";

const Main = ({ shrinkMain, dropdownVisible, handleLinkClick }) => {
  return (
    <>
      <main className={`main ${shrinkMain ? "dropdown-visible" : ""}`}>
        <Dropdown
          dropdownVisible={dropdownVisible}
          onLinkClick={handleLinkClick}
        />
        <div
          className={`main__content ${shrinkMain ? "dropdown-visible" : ""}`}
        >
          <HeroSection />
          <Philosophy />
          <Provider />
        </div>
      </main>
    </>
  );
};

export default Main;
