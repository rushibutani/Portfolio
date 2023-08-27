import React from 'react';
import { useState } from "react";
import './style.scss';
import NavBar from "../src/components/NavBar"
import Home from "../src/components/Home"
import About from '../src/components/About/About';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';
import ScrollToTopButton from './CommoonComponents/Scroll/ScrollToTopButton';

import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaSun } from "react-icons/fa"

function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);

    const root = document.documentElement;
    root.style.setProperty(
      "--color-black",
      isDarkTheme ? "black" : "white"
    );

    root.style.setProperty(
      "--color-white",
      isDarkTheme ? "white" : "black"
    );

    root.style.setProperty(
      "--color-p",
      isDarkTheme ? "rgb(171, 171, 171)" : "rgb(68, 68, 68)"
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

  };

  return (
    <>
      <div id='app'>
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <ScrollToTopButton />

        <button onClick={toggleTheme} className="theme-btn">
          {isDarkTheme ? <BsFillMoonStarsFill className='theme-btn-icon' /> : <FaSun className='theme-btn-icon' />}
        </button>
      </div >
    </>
  );
}

export default App;
