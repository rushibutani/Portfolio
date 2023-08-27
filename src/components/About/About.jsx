import React, { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";
import Interests from "./Interests";

export default function About() {
  const [educationData, setEducationData] = useState(false);
  const [skillData, setSkillData] = useState(true);
  const [interestData, setInterestData] = useState(false);

  return (
    <>
      <section id="about">
        <p className="section-text-p1">Get To Know More About Rushi</p>
        <h1 className="title">About Me</h1>

        <p className="about-me-text">
          I'm a Front-end Developer based in Gujarat, India. Seeking many ways
          to improve my skills through problem-solving and creating various
          projects!
        </p>

        <div className="w-full mb-40">
          <ul className="flex items-center">
            <li
              onClick={() =>
                setEducationData(true) &
                setSkillData(false) &
                setInterestData(false)
              }
              className={`${
                educationData ? "about-list-before" : "about-list"
              }`}
            >
              Education / Courses
            </li>
            <li
              onClick={() =>
                setEducationData(false) &
                setSkillData(true) &
                setInterestData(false)
              }
              className={`${skillData ? "about-list-before" : "about-list"}`}
            >
              Skills
            </li>
            <li
              onClick={() =>
                setEducationData(false) &
                setSkillData(false) &
                setInterestData(true)
              }
              className={`${interestData ? "about-list-before" : "about-list"}`}
            >
              Interests
            </li>
          </ul>
        </div>

        {educationData && <Education />}
        {skillData && <Skills />}
        {interestData && <Interests />}
      </section>
    </>
  );
}
