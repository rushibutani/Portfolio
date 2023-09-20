import React from "react";

const Education = () => {
  const edu = [
    {
      id: 1,
      title: "Front-End Web Development Course in ReactJs",
      subtitle: "TOPS Technologies, Ahmedabad (2023)",
      // style: "border-highlight",
    },
    {
      id: 2,
      title: "The Complete Front-End Web Development Course in ReactJs",
      subtitle: "Udemy",
      // style: "border-highlight",
    },
    {
      id: 3,
      title: "M.Sc. in Organic Chemistry",
      subtitle: "CCSIT College, Junagadh (2018 - 2020)",
    },
    {
      id: 4,
      title: "B.Sc. in Chemistry",
      subtitle: "Bahauddin Science College, Junagadh (2015 - 2018)",
    },
    {
      id: 5,
      title: "H.S.C. in Science",
      subtitle: "Shree Sandipani Vidya Sankul, Dhoraji (2011 - 2013)",
    },
  ];

  return (
    <section id="education">
      <h2 className="edu-title font-title">Education & Courses</h2>
      <div className="w-full flex education-card-content items-center">
        {edu.map(({ id, title, subtitle, style }) => (
          <div key={id} className={`education-card-details ${style}`}>
            <h3 className="font-title">{title}</h3>
            <p>{subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
