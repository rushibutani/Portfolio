import React from "react";
import { motion } from "framer-motion";
import { TbMessage2Heart } from "react-icons/tb";
import { MdTravelExplore } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { BsCameraFill } from "react-icons/bs";
import { RiMusic2Fill } from "react-icons/ri";

const Interests = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      id="interests"
    >
      <div className="about-icon-h2">
        <TbMessage2Heart className="about-icon" />
        <h2>Interests</h2>
      </div>
      <div className="skills-content flex justify-center items-center">
        <div className="skills-card-content">
          <div className="skills-icon">
            <MdTravelExplore />
          </div>
          <h4>Travelling</h4>
        </div>
        <div className="skills-card-content">
          <div className="skills-icon">
            <BiSolidMoviePlay />
          </div>
          <h4>Movies & Web Serier</h4>
        </div>
        <div className="skills-card-content">
          <div className="skills-icon">
            <RiMusic2Fill />
          </div>
          <h4>Music</h4>
        </div>
        <div className="skills-card-content">
          <div className=" skills-icon">
            <BsCameraFill />
          </div>
          <h4>Photography</h4>
        </div>
      </div>
    </motion.section>
  );
};

export default Interests;
