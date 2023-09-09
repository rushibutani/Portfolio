import React from "react";
import myImg1 from "../assets/img/my-img-profile.webp";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Home() {
  const [text] = useTypewriter({
    words: ["Front-End Developer", "Web Designer"],
    loop: true,
    typeSpeed: 60,
    deLeteSpeed: 10,
    deLaySpeed: 2000,
  });

  const handleDownload = () => {
    const resumeFilePath = "RushiResume.pdf";
    const anchor = document.createElement("a");
    anchor.href = resumeFilePath;
    anchor.download = "Rushi Resume.pdf";
    anchor.click();
  };

  const linkedinIconButton = () => {
    const linkedinProfileUrl = "https://in.linkedin.com/in/rushibutani";
    window.open(linkedinProfileUrl, "_blank");
  };

  const githubIconButton = () => {
    const gitHubProfileUrl = "https://github.com/rushibutani";
    window.open(gitHubProfileUrl, "_blank");
  };

  return (
    <>
      <section id="home">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="home-img-section"
        >
          <img src={myImg1} alt="Rushi Profile" loading="lazy" />
        </motion.div>

        <div className="home-text-section">
          <p>Welcome To My World</p>

          <h1 className="title font-heading">
            Hello, i'm <span className="myname">Rushi Butani</span>
          </h1>

          <p className="typewriter-text">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="rgb(254, 1, 79)"
            />
          </p>
          <div className="home-btn-container">
            <button
              className="btn home-btn-one font-heading"
              onClick={() => {
                handleDownload();
              }}
            >
              Download Resume
            </button>

            <button
              className="btn home-btn-two font-heading"
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Info
            </button>
          </div>
          <div className="home-social-icons">
            <AiFillLinkedin className="icon" onClick={linkedinIconButton} />
            <AiFillGithub className="icon" onClick={githubIconButton} />
          </div>
        </div>
      </section>
    </>
  );
}
