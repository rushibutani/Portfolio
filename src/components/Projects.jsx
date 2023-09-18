import React from "react";
import projectimg1 from "../assets/img/RushiLogo.webp";
import projectimg2 from "../assets/img/edusite-logo.webp";
import projectimg3 from "../assets/img/mi-logo.webp";
import projectimg4 from "../assets/img/vete-logo.webp";
import projectimg5 from "../assets/img/tesla-logo.webp";

const Projects = () => {
  const githubIconButton1 = () => {
    const gitHubProfileUrl = "https://github.com/rushibutani/portfolio";
    window.open(gitHubProfileUrl, "_blank");
  };

  const githubIconButton2 = () => {
    const gitHubProfileUrl =
      "https://github.com/rushibutani/Website-Clone-Projects/tree/main/iEducate%20Website";
    window.open(gitHubProfileUrl, "_blank");
  };

  const githubIconButton3 = () => {
    const gitHubProfileUrl =
      "https://github.com/rushibutani/Website-Clone-Projects/tree/main/Xiaomi%20Website%20Clone";
    window.open(gitHubProfileUrl, "_blank");
  };

  const githubIconButton4 = () => {
    const gitHubProfileUrl =
      "https://github.com/rushibutani/Website-Clone-Projects/tree/main/Veterinarian%20Psd%20Clone";
    window.open(gitHubProfileUrl, "_blank");
  };

  const githubIconButton5 = () => {
    const gitHubProfileUrl =
      "https://github.com/rushibutani/Website-Clone-Projects/tree/main/Tesla%20Website%20Clone";
    window.open(gitHubProfileUrl, "_blank");
  };

  return (
    <section id="projects">
      <p className="section-text-p1">Browse My Recent</p>
      <h1 className="title mb-40 font-heading">MY PROJECTS</h1>

      <div className="w-full project-card-container">
        <div className="project-card">
          <div className="project-img">
            <img src={projectimg1} alt="src" />
          </div>
          <div className="project-title-a">
            <h4 className="project-title font-title">My Portfolio</h4>

            <p>
              My Portfolio for introducing myself digitally. It is built using
              HTML, CSS, SASS, JavaScript and ReactJs.
            </p>

            <button
              className="project-btn font-title"
              onClick={githubIconButton1}
            >
              GitHub
            </button>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img src={projectimg2} alt="src" />
          </div>
          <div className="project-title-a">
            <h4 className="project-title font-title">iEducate</h4>

            <p>
              Static website to showcase the future of education. It is built
              using HTML, CSS and JavaScript.
            </p>

            <button
              className="project-btn font-title"
              onClick={githubIconButton2}
            >
              GitHub
            </button>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img src={projectimg3} alt="src" />
          </div>
          <div className="project-title-a">
            <h4 className="project-title font-title">Xiaomi Website Clone</h4>

            <p>Xiaomi official website clone using HTML, CSS and JavaScript.</p>

            <button
              className="project-btn font-title"
              onClick={githubIconButton3}
            >
              GitHub
            </button>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img src={projectimg4} alt="src" />
          </div>
          <div className="project-title-a">
            <h4 className="project-title font-title">Veterinary PSD Clone</h4>

            <p>Veterinary PSD website design built using HTML and CSS.</p>

            <button
              className="project-btn font-title"
              onClick={githubIconButton4}
            >
              GitHub
            </button>
          </div>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img src={projectimg5} alt="src" />
          </div>
          <div className="project-title-a">
            <h4 className="project-title font-title">Tesla Website Clone</h4>

            <p>Tesla official website clone using HTML, CSS and JavaScript.</p>

            <button
              className="project-btn font-title"
              onClick={githubIconButton5}
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
