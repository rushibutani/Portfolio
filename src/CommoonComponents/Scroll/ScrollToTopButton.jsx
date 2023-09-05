import React, { useState, useEffect } from "react";

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
    <div
      className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 32 32"
        id="up-arrow"
      >
        <path d="M26 22a2 2 0 0 1-1.41-.59L16 12.83l-8.59 8.58a2 2 0 0 1-2.82-2.82l10-10a2 2 0 0 1 2.82 0l10 10A2 2 0 0 1 26 22Z"></path>
      </svg>
    </div>
  );
};

export default ScrollToTopButton;
