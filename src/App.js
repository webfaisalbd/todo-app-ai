import Home from "./components/Home";

import { useState } from "react";
import './App.css';
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "./components/ThemeContext";

function App() {
  const [darkMode, setdarkMode] = useState(false);


  return (
    <ThemeContext.Provider value={{darkMode, setdarkMode}}>
      <div className={darkMode ? "dark-body" : "light-body"}>

        <div className="title">
          <h1 className={darkMode ? "dark-text" : "light-text"}>My Tasks</h1>
          <div onClick={() => setdarkMode(!darkMode)}>{darkMode ? <span className="icon"><FaMoon /></span> : <FaSun />}</div>
        </div>

        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
