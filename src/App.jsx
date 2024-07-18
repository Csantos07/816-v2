import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="App">
      <Header onToggle={toggleDropdown} />
      <Main dropdownVisible={dropdownVisible} />
      < Footer />
    </div>
  );
}

export default App;
