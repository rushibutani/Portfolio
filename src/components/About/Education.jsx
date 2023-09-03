import React from "react";
import { motion } from "framer-motion";
import EducationCard from "./EducationCard";
import { FaGraduationCap } from "react-icons/fa";
import { PiCertificateDuotone } from "react-icons/pi";

const Education = () => {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="about-icon-h2 font-heading">
        <PiCertificateDuotone className="about-icon" />
        <h2>Courses & Certifications</h2>
      </div>

      <div className="w-full flex education-card-content items-center">
        <EducationCard
          title="Front-End Web Development Course in ReactJs"
          subTitle="TOPS Technologies, Ahmedabad (2023)"
        />

        <EducationCard
          title="The Complete Front-End Web Development Course in ReactJs"
          subTitle="Udemy"
        />
      </div>

      <div className="about-icon-h2 flex items-center font-heading">
        <FaGraduationCap className="about-icon" />
        <h2>Education</h2>
      </div>

      <div className="w-full flex education-card-content items-center">
        <EducationCard
          title="M.Sc. in Organic Chemistry"
          subTitle="CCSIT College, Junagadh (2018 - 2020)"
        />
        <EducationCard
          title="B.Sc. in Chemistry"
          subTitle="Bahauddin Science College, Junagadh (2015 - 2018)"
        />
        <EducationCard
          title="H.S.C. in Science"
          subTitle="Shree Sandipani Vidya Sankul, Dhoraji (2011 - 2013)"
        />
      </div>
    </motion.section>
  );
};

export default Education;
