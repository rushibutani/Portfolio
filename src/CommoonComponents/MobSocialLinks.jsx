import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { BsFacebook, BsTwitter } from "react-icons/bs";

export const MobSocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin />
        </>
      ),
      href: "https://in.linkedin.com/in/rushibutani",
      arealabel: "Linkedin",
    },
    {
      id: 2,
      child: (
        <>
          <GrInstagram />
        </>
      ),
      href: "https://www.instagram.com/rushibutani/",
      arealabel: "Instagram",
    },
    {
      id: 3,
      child: (
        <>
          <BsTwitter />
        </>
      ),
      href: "https://twitter.com/rushibutani_",
      arealabel: "Twitter",
    },
    {
      id: 4,
      child: (
        <>
          <BsFacebook />
        </>
      ),
      href: "https://www.facebook.com/rushibutani",
      arealabel: "Facebook",
    },
  ];
  return (
    <>
      <ul className="flex mob-menu-icon-container">
        {links.map(({ id, child, href, download, arealabel }) => (
          <li key={id} className="mob-menu-icon">
            <a
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
              aria-label={arealabel}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
