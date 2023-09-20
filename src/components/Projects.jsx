import React from "react";
import projectimg1 from "../assets/img/RushiLogo.webp";
import projectimg2 from "../assets/img/edusite-logo.webp";
import projectimg3 from "../assets/img/mi-logo.webp";
import projectimg4 from "../assets/img/vete-logo.webp";
import projectimg5 from "../assets/img/tesla-logo.webp";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: projectimg1,
      title: "My Portfolio",
      dec: "My Portfolio for introducing myself digitally. It is built using HTML, CSS, SASS, JavaScript and ReactJs.",
      repo: "https://github.com/rushibutani/portfolio",
    },
    {
      id: 2,
      src: projectimg2,
      title: "iEducate",
      dec: "Static website to showcase the future of education. It is built using HTML, CSS and JavaScript.",
      repo: "https://github.com/rushibutani/Website-Clone-Projects/tree/main/iEducate%20Website",
    },
    {
      id: 3,
      src: projectimg3,
      title: "Xiaomi Website Clone",
      dec: "Xiaomi official website clone using HTML, CSS and JavaScript.",
      repo: "https://github.com/rushibutani/Website-Clone-Projects/tree/main/Xiaomi%20Website%20Clone",
    },
    {
      id: 4,
      src: projectimg4,
      title: "Veterinary PSD Clone",
      dec: "Veterinary PSD website design built using HTML and CSS.",
      repo: "https://github.com/rushibutani/Website-Clone-Projects/tree/main/Veterinarian%20Psd%20Clone",
    },
    {
      id: 5,
      src: projectimg5,
      title: "Tesla Website Clone",
      dec: "Tesla official website clone using HTML, CSS and JavaScript.",
      repo: "https://github.com/rushibutani/Website-Clone-Projects/tree/main/Tesla%20Website%20Clone",
    },
  ];

  return (
    <section id="projects">
      <p className="section-text-p1">Browse My Recent</p>
      <h1 className="title mb-40 font-heading">MY PROJECTS</h1>

      <div className="w-full project-card-container">
        {projects.map(({ id, src, title, dec, repo }) => (
          <div key={id} className="project-card">
            <div className="project-img">
              <img
                src={src}
                width={1280}
                height={900}
                alt="Projects"
                loading="lazy"
              />
            </div>
            <div className="project-title-a">
              <h2 className="project-title font-title">{title}</h2>
              <p>{dec}</p>
              <div className="project-btn-container">
                <button
                  className="project-btn font-title"
                  onClick={() => window.open(repo, "_blank")}
                >
                  GitHub
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
