import React from "react";
import "./Header.scss";

const Header = ({ onToggle }) => {
  return (
    <header className="header">
      <img className="header__nav-logo" src="/no-date.svg" alt="" />

      <div className="header__hamburger" onClick={onToggle}>
        <div className="header__hamburger-bar"></div>
        <div className="header__hamburger-bar"></div>
        <div className="header__hamburger-bar"></div>
      </div>
    </header>
  );
};

export default Header;
