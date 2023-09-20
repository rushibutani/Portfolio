import React, { Suspense } from "react";
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
  return (
    <>
      <Suspense fallback={<Loader />}>
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <ScrollToTopButton />
        <DarkLightTheme />
      </Suspense>
    </>
  );
}

export default App;
