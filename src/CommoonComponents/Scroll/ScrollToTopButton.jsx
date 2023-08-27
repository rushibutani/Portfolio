import React, { useState, useEffect } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BsFillArrowUpSquareFill
      className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    />
  );
};

export default ScrollToTopButton;
