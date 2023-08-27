import React from "react";
import { motion } from "framer-motion";
import {
  BiLogoCss3,
  BiLogoReact,
  BiLogoJavascript,
  BiLogoJquery,
} from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { DiSass } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { PiUserCircleGearBold } from "react-icons/pi";

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      id="skills"
    >
      <div className="about-icon-h2">
        <PiUserCircleGearBold className="about-icon" />
        <h2>Skills</h2>
      </div>
      <div className="skills-content flex items-center">
        <div className="skills-card-content skills-icon-html">
          <div className="skills-icon">
            <AiFillHtml5 />
          </div>
          <h4>HTML</h4>
        </div>
        <div className="skills-card-content skills-icon-css">
          <div className="skills-icon">
            <BiLogoCss3 />
          </div>
          <h4>CSS</h4>
        </div>
        <div className="skills-card-content skills-icon-boot">
          <div className=" skills-icon">
            <FaBootstrap />
          </div>
          <h4>BootStrap</h4>
        </div>
        <div className="skills-card-content skills-icon-sass">
          <div className=" skills-icon">
            <DiSass />
          </div>
          <h4>SASS</h4>
        </div>

        <div className="skills-card-content skills-icon-jq">
          <div className="skills-icon">
            <BiLogoJquery />
          </div>
          <h4>jQuery</h4>
        </div>

        <div className="skills-card-content skills-icon-js">
          <div className="skills-icon">
            <BiLogoJavascript />
          </div>
          <h4>JavaScript</h4>
        </div>

        <div className="skills-card-content skills-icon-react">
          <div className=" skills-icon">
            <BiLogoReact />
          </div>
          <h4>ReactJs</h4>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
