import React, { useEffect, useState } from "react";
import "./style.scss";
import NavBar from "../src/components/NavBar";
import ScrollToTopButton from "./CommoonComponents/ScrollToTopButton";
import { DarkLightTheme } from "./CommoonComponents/DarkLightTheme";
import { Loader } from "./CommoonComponents/Loader";
const Home = React.lazy(() => import("../src/components/Home"));
const About = React.lazy(() => import("../src/components/About/About"));
const Projects = React.lazy(() => import("../src/components/Projects"));
const Contact = React.lazy(() => import("../src/components/Contact"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <NavBar />
          <Home />
          <About />
          <Projects />
          <Contact />
          <ScrollToTopButton />
          <DarkLightTheme />
        </div>
      )}
    </>
  );
}

export default App;
