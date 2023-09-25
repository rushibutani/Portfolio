import React, { useState } from "react";

export const DarkLightTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);

    const root = document.documentElement;
    root.style.setProperty("--color-black", isDarkTheme ? "black" : "white");
    root.style.setProperty("--color-white", isDarkTheme ? "white" : "black");

    root.style.setProperty(
      "--color-p",
      isDarkTheme ? "rgb(220, 220, 220)" : "rgb(30, 30, 30)"
    );

    root.style.setProperty(
      "--color-content-bg-dark",
      isDarkTheme ? "rgb(24, 24, 24)" : "rgb(233 233 233)"
    );

    root.style.setProperty(
      "--color-content-bg-light",
      isDarkTheme ? "rgb(39, 39, 39)" : "rgb(255, 255, 255)"
    );

    root.style.setProperty(
      "--about-content-color",
      isDarkTheme ? "rgb(206, 206, 206)" : "black"
    );

    root.style.setProperty(
      "--color-bg-section",
      isDarkTheme ? "rgb(19, 19, 19)" : "rgb(244, 244, 244)"
    );

    root.style.setProperty(
      "--color-project-border",
      isDarkTheme ? "rgb(51, 51, 51)" : "rgb(68, 68, 68)"
    );

    root.style.setProperty(
      "--color-home-bg-dark",
      isDarkTheme ? "rgba(10, 10, 10, 0.9)" : "rgba(255, 255, 255, 0.8)"
    );

    root.style.setProperty(
      "--color-home-bg-light",
      isDarkTheme ? "rgba(5, 5, 5, 0.9)" : "rgba(255, 255, 255, 0.9)"
    );
  };

  return (
    <>
      <label htmlFor="toggle" className="visually-hidden">
        Toggle Theme
      </label>
      <input
        type="checkbox"
        onClick={toggleTheme}
        id="toggle"
        className="toggle-ab"
      />
    </>
  );
};
