import React, { useState, useRef, useEffect } from "react";
import "../style.scss";
import { Link } from "react-scroll";
import { MobSocialLinks } from "../CommoonComponents/MobSocialLinks";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const navbarRef = useRef(null);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

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
          {links.map(({ id, link }) => (
            <li key={id} className="nav-link-item">
              <Link
                to={link}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
                duration={200}
              >
                {link}
              </Link>
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
                {links.map(({ id, link }) => (
                  <li key={id} className="nav-link-item">
                    <Link
                      to={link}
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={200}
                      onClick={() => setShowMenu(false)}
                    >
                      {link}
                    </Link>
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
