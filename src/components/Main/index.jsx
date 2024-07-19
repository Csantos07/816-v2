import React from "react";
import "./Main.scss";
import Dropdown from "../Dropdown";
import FillerContent from "../FillerContent";

const Main = ({ dropdownVisible }) => {
  return (
    <>
      <main className={`main ${dropdownVisible ? "dropdown-visible" : ""}`}>
        <Dropdown dropdownVisible={dropdownVisible} />
        {/* <div className={`main__content ${dropdownVisible ? "hidden" : ""}`}> */}
        <div className={"main__content"}>
          {/* Other components go here */}

          <FillerContent />
          <FillerContent />
          <FillerContent />
          <FillerContent />
        </div>
      </main>
    </>
  );
};

export default Main;
