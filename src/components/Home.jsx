import React from "react";
import myImg1 from "../assets/img/my-img-profile.webp";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Home() {
  const links = [
    {
      id: 1,
      child: (
        <>
          <AiFillLinkedin />
        </>
      ),
      href: "https://in.linkedin.com/in/rushibutani",
      arealabel: "Linkedin",
    },
    {
      id: 2,
      child: (
        <>
          <AiFillGithub />
        </>
      ),
      href: "https://github.com/rushibutani",
      arealabel: "Github",
    },
  ];

  const [text] = useTypewriter({
    words: ["Front-End Developer", "Web Designer"],
    loop: true,
    typeSpeed: 60,
    deLeteSpeed: 10,
    deLaySpeed: 2000,
  });

  const handleDownload = () => {
    const resumeFilePath = "Rushi_Butani_Resume.pdf";
    const anchor = document.createElement("a");
    anchor.href = resumeFilePath;
    anchor.download = "Rushi_Butani_Resume.pdf";
    anchor.click();
  };

  return (
    <>
      <section id="home">
        <div className="home-img-section">
          <img
            src={myImg1}
            width={951}
            height={1280}
            alt="Rushi Profile"
            loading="lazy"
          />
        </div>

        <div className="home-text-section">
          <p>Welcome To My World</p>

          <h1 className="title font-title">
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
              className="btn home-btn-one font-title"
              onClick={() => {
                handleDownload();
              }}
            >
              Download Resume
            </button>

            <button
              className="btn home-btn-two font-title"
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
            {links.map(({ id, child, href, arealabel }) => (
              <a
                key={id}
                href={href}
                className="icon"
                target="_blank"
                rel="noreferrer"
                aria-label={arealabel}
              >
                {child}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
