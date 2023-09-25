import React, { useState, useRef, useEffect } from "react";
import "../style.scss";
import { MobSocialLinks } from "../CommoonComponents/MobSocialLinks";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const navbarRef = useRef(null);

  const links = [
    {
      id: 1,
      href: "#home",
      link: "home",
    },
    {
      id: 2,
      href: "#about",
      link: "about",
    },
    {
      id: 3,
      href: "#projects",
      link: "projects",
    },
    {
      id: 4,
      href: "#contact",
      link: "contact",
    },
  ];

  const [activeLink, setActiveLink] = useState("home");
  const [scrolling, setScrolling] = useState(false);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const newOffsetTop = targetElement.offsetTop - 60;
      setScrolling(true);
      window.scrollTo({
        top: newOffsetTop,
        behavior: "smooth",
      });
      setTimeout(() => {
        setActiveLink(targetId);
        setScrolling(false);
      }, 700);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!scrolling) {
        const homeElement = document.getElementById("home");
        const aboutElement = document.getElementById("about");
        const projectsElement = document.getElementById("projects");
        const contactElement = document.getElementById("contact");

        const scrollPosition = window.scrollY;

        if (
          scrollPosition >= homeElement.offsetTop - 80 &&
          scrollPosition < aboutElement.offsetTop - 80
        ) {
          setActiveLink("home");
        } else if (
          scrollPosition >= aboutElement.offsetTop - 80 &&
          scrollPosition < projectsElement.offsetTop - 80
        ) {
          setActiveLink("about");
        } else if (
          scrollPosition >= projectsElement.offsetTop - 80 &&
          scrollPosition < contactElement.offsetTop - 80
        ) {
          setActiveLink("projects");
        } else if (scrollPosition >= contactElement.offsetTop - 80) {
          setActiveLink("contact");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

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

  return (
    <>
      <section id="navbar">
        <div className="logo-name">
          <span>R</span>ushi<span>B</span>utani
        </div>

        <ul className="nav-links-n font-title">
          {links.map(({ id, href, link }) => (
            <li key={id} className="nav-link-item">
              <a
                href={href}
                className={activeLink === link ? "active" : ""}
                onClick={(e) => handleClick(e, link)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

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

              <ul className="mob-menu-li font-title">
                {links.map(({ id, href, link }) => (
                  <li key={id} className="nav-link-item">
                    <a
                      href={href}
                      className={activeLink === link ? "active" : ""}
                      onClick={(e) => handleClick(e, link)}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <MobSocialLinks />
          </div>
        </div>
      </section>
    </>
  );
}
