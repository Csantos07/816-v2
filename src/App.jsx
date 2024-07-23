import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [shrinkMain, setShrinkMain] = useState(false);

  const toggleDropdown = () => {
    setShrinkMain(!shrinkMain); // Consider reversing the order
    setTimeout(() => {
      setDropdownVisible(!dropdownVisible);
    }, 1000);
  };

  const handleLinkClick = (e) => {
    const href = e.target.getAttribute("href");

    // Check if the href is an internal link
    if (href && href.startsWith("#")) {
      e.preventDefault();

      setShrinkMain(false);

      setTimeout(() => {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - 50; // Adjust 50px higher

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);

      setTimeout(() => {
        setDropdownVisible(false); // Close the dropdown
      }, 300);
    }
  };

  return (
    <div className="App">
      <Header onToggle={toggleDropdown} />

      <Main
        shrinkMain={shrinkMain}
        dropdownVisible={dropdownVisible}
        handleLinkClick={handleLinkClick}
      />
      <Footer dropdownVisible={dropdownVisible} />
    </div>
  );
}

export default App;
