import React from "react";
import "./Dropdown.scss";

const Dropdown = ({ dropdownVisible, onLinkClick }) => {
  return (
    <section className={`dropdown ${dropdownVisible ? "visible" : ""}`}>
      <a
        href="https://www.google.com/"
        className="dropdown--link"
        onClick={onLinkClick}
      >
        Home
      </a>
      <a href="#philosophy" className="dropdown--link" onClick={onLinkClick}>
        Philosophy
      </a>
      <a href="#provider" className="dropdown--link" onClick={onLinkClick}>
        Provider
      </a>
      <a href="#" className="dropdown--link" onClick={onLinkClick}>
        Book A Call
      </a>
    </section>
  );
};

export default Dropdown;
