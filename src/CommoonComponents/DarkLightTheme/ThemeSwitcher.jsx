import React, { useState } from "react";
import "../../style.scss";
// import { BsFillArrowUpSquareFill } from "react-icons/bs";

const ThemeSwitcher = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={`theme-switcher ${isDarkTheme ? "dark" : "light"}`}>
      <button onClick={toggleTheme} className="theme-btn">
        {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
