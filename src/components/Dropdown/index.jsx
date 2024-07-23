import React from "react";
import "./Dropdown.scss";

const Dropdown = ({ dropdownVisible, onLinkClick }) => {
  return (
    <>
      <section className={`dropdown ${dropdownVisible ? "visible" : ""}`}>
        <a href="#home" className="dropdown--link" onClick={onLinkClick}>
          Home
        </a>
        <a href="#philosophy" className="dropdown--link" onClick={onLinkClick}>
          Philosophy
        </a>
        <a href="#provider" className="dropdown--link" onClick={onLinkClick}>
          Provider
        </a>
        <a
          href="https://816rehabandperformance.janeapp.com/#/staff_member/1/bio"
          target="_blank"
          rel="noopener noreferrer"
          className="dropdown--link"
          onClick={onLinkClick}
        >
          Book A Call
        </a>
      </section>
    </>
  );
};

export default Dropdown;
