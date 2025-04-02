"use client";

import { useEffect, useState } from "react";

const HeaderScrollShadow = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 10);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`absolute inset-0 transition-shadow duration-200 pointer-events-none ${
        hasScrolled ? "shadow-xl" : ""
      }`}
      aria-hidden="true"
    />
  );
};

export default HeaderScrollShadow;
