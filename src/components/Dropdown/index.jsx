import React from "react";
import "./Dropdown.scss";

const Dropdown = ({ dropdownVisible }) => {
  return (
    <>
      <section className={`dropdown ${dropdownVisible ? "visible" : ""}`}>
        <span className="dropdown--link">Home</span>
        <span className="dropdown--link">Philosophy</span>
        <span className="dropdown--link">Provider</span>
      </section>
    </>
  );
};

export default Dropdown;
