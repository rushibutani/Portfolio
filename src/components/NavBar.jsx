import React, { useState, useRef, useEffect } from "react";
import "../style.scss";
import { Link } from "react-scroll";
import { LuMenu } from "react-icons/lu";
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

        <div className="nav-links-n font-heading">
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

        <span
          ref={navbarRef}
          onClick={() => setShowMenu(!showMenu)}
          className="new-menu"
        >
          <LuMenu />
        </span>

        <div
          className="show-menu-container"
          style={{ display: showMenu ? "block" : "none" }}
        >
          <div className="show-menu-content">
            <div className="show-menu-logoname">
              <div className="logo-name">
                <span>R</span>ushi<span>B</span>utani
              </div>
            </div>
            <div className="show-menu-li font-heading">
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
            <div className="show-menu-findme font-heading">
              <h3>Find me in</h3>
              <div className="flex show-menu-icon-container">
                <span className="show-menu-icon" onClick={handleLinkedInClick}>
                  <FaLinkedin />
                </span>
                <span className="show-menu-icon" onClick={handleInstagramClick}>
                  <GrInstagram />
                </span>
                <span className="show-menu-icon" onClick={handleFacebookClick}>
                  <BsFacebook />
                </span>
                <span className="show-menu-icon" onClick={handleTwitterClick}>
                  <BsTwitter />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
