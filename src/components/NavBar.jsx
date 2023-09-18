import React, { useState, useRef, useEffect } from "react";
import "../style.scss";
import { Link } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsFacebook, BsTwitter } from "react-icons/bs";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const navbarRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  const handleLinkedInClick = () => {
    const linkedinProfileUrl = "https://in.linkedin.com/in/rushibutani";
    window.open(linkedinProfileUrl, "_blank");
  };

  const handleFacebookClick = () => {
    const facebookProfileUrl = "https://www.facebook.com/rushibutani";
    window.open(facebookProfileUrl, "_blank");
  };

  const handleInstagramClick = () => {
    const instagramProfileUrl = "https://www.instagram.com/rushibutani/";
    window.open(instagramProfileUrl, "_blank");
  };

  const handleTwitterClick = () => {
    const twitterProfileUrl = "https://twitter.com/rushibutani_";
    window.open(twitterProfileUrl, "_blank");
  };

  return (
    <>
      <section id="navbar">
        <div className="logo-name">
          <span>R</span>ushi<span>B</span>utani
        </div>

        <div className="nav-links-n font-title">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={200}
            className="nav-link-item"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-40}
            duration={200}
            className="nav-link-item"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-40}
            duration={200}
            className="nav-link-item"
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-40}
            duration={200}
            className="nav-link-item"
          >
            Contact
          </Link>
        </div>

        <div
          ref={navbarRef}
          onClick={() => setShowMenu(!showMenu)}
          className="mob-menu"
        >
          <div
            className={`${"burger"} ${showMenu ? "burgerActive" : ""}`}
          ></div>
        </div>

        <div
          className="mob-menu-container"
          style={{ display: showMenu ? "block" : "none" }}
        >
          <div className="mob-menu-content">
            <div className="mob-menu-logo-link">
              <div className="mob-menu-logo-name">
                <div className="logo-name">
                  <span>R</span>ushi<span>B</span>utani
                </div>
              </div>
              <div className="mob-menu-li font-title">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                  className="nav-link-item"
                  onClick={() => setShowMenu(false)}
                >
                  Home
                </Link>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={200}
                  className="nav-link-item"
                  onClick={() => setShowMenu(false)}
                >
                  About
                </Link>
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={200}
                  className="nav-link-item"
                  onClick={() => setShowMenu(false)}
                >
                  Projects
                </Link>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={200}
                  className="nav-link-item"
                  onClick={() => setShowMenu(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex mob-menu-icon-container">
              <span className="mob-menu-icon" onClick={handleLinkedInClick}>
                <FaLinkedin />
              </span>
              <span className="mob-menu-icon" onClick={handleInstagramClick}>
                <GrInstagram />
              </span>
              <span className="mob-menu-icon" onClick={handleFacebookClick}>
                <BsFacebook />
              </span>
              <span className="mob-menu-icon" onClick={handleTwitterClick}>
                <BsTwitter />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
