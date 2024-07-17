import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img className="header__nav-logo" src="/no-date.svg" alt="" />

      <div className="header__hamburger" id="hamburger">
        <div className="header__hamburger-bar"></div>
        <div className="header__hamburger-bar"></div>
        <div className="header__hamburger-bar"></div>
      </div>
    </header>
  );
};

export default Header;
