import React from "react";
import "./Dropdown.scss";

const Dropdown = ({ dropdownVisible }) => {
  return (
    <>
      <section className={`dropdown ${dropdownVisible ? "visible" : ""}`}>
        <a href="#home" className="dropdown--link">
          Home
        </a>
        <a href="#philosophy" className="dropdown--link">
          Philosophy
        </a>
        <a href="#provider" className="dropdown--link">
          Provider
        </a>
        <a href="#" className="dropdown--link">
          Book A Call
        </a>
      </section>
    </>
  );
};

export default Dropdown;
