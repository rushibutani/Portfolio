import React from "react";

const EducationCard = ({ title, subTitle }) => {
  return (
    <>
      <div className="w-full education-card-details">
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
    </>
  );
};

export default EducationCard;
