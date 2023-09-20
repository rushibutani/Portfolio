import React from "react";
import Education from "./Education";
import Skills from "./Skills";
import Interests from "./Interests";

export default function About() {
  return (
    <>
      <section id="about">
        <p className="section-text-p1">Get To Know More About Rushi</p>
        <h1 className="title font-heading">ABOUT ME</h1>

        <p className="about-me-text">
          Hi, i'm Rushi Butani. I'm a Frontend Web Developer based in Gujarat,
          India. Excited for improving my skills and learning new technologies.
          I'm open to learn and work with any web technology.
        </p>

        <div className="about-content-container">
          <div>
            <Education />
          </div>
          <div className="skills-interests-container">
            <Skills />
            <Interests />
          </div>
        </div>
      </section>
    </>
  );
}
