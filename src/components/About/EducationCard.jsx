import React from "react";

const EducationCard = ({ title, subTitle }) => {
  return (
    <>
      <div className="education-card-details">
        <h3 className="font-title">{title}</h3>
        <p>{subTitle}</p>
      </div>
    </>
  );
};

export default EducationCard;
