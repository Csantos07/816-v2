import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Dropdown from "./components/Dropdown";

import { useState } from "react";

function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [shrinkMain, setShrinkMain] = useState(false);

  const toggleDropdown = () => {
    setShrinkMain(!shrinkMain);
    setTimeout(() => {
      setDropdownVisible(!dropdownVisible);
    }, 300);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();

    setShrinkMain(false);

    setTimeout(() => {
      const targetId = e.target.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY; // Adjust 50px higher

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);

    setTimeout(() => {
      setDropdownVisible(false); // Close the dropdown
    }, 300);
  };

  return (
    <div className="App">
      <Header onToggle={toggleDropdown} />
      <Dropdown
        dropdownVisible={dropdownVisible}
        onLinkClick={handleLinkClick}
      />
      <Main shrinkMain={shrinkMain} />
      <Footer dropdownVisible={dropdownVisible} />
    </div>
  );
}

export default App;
