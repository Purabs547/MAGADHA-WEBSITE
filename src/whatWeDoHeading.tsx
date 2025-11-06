import React, { useEffect, useRef, useState } from "react";

const WhatWeDoHeading: React.FC = () => {
  const headingRef = useRef<HTMLElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (headingRef.current) {
        const rect = headingRef.current.getBoundingClientRect();
        const headingTop = rect.top;
        const windowHeight = window.innerHeight;
        const progress = Math.max(
          0,
          Math.min(1, (windowHeight - headingTop) / windowHeight)
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define heights based on screen size
  const getSectionHeight = () => {
    if (windowWidth >= 1536) { // xl screens (1536px and above)
      return "100vh";
    } else if (windowWidth >= 1280) { // lg screens (1280px - 1535px)
      return "100vh";
    } else if (windowWidth >= 1024) { // laptop screens (1024px - 1279px)
      return "100vh";
    } else if (windowWidth >= 768) { // laptop screens (1024px - 1279px)
      return "90vh";
    } else {
      return "46vh"; // default for smaller screens
    }
  };

  const getGrassHeight = () => {
    if (windowWidth >= 1536) { // xl screens
      return "45vh";
    } else if (windowWidth >= 1280) { // lg screens
      return "50vh";
    } else if (windowWidth >= 1024) { // laptop screens
      return "55vh";
    } else {
      return "55vh"; // default for smaller screens
    }
  };

  return (
    <section
      ref={headingRef}
      className="
        relative 
        flex items-center justify-center
        w-full 
        -mt-[38%] lg:-mt-[20%] xl:-mt-[20%] md:-mt-[20%] 2xl:-mt-[20%]
        bg-[url('/aboutus.png')] 
        bg-no-repeat bg-top
        overflow-hidden
      "
      style={{
        height: getSectionHeight(),
        backgroundSize: "130% auto",
      }}
    >
      {/* Left Grass */}
      <img
        src="/animatedleftgrass.svg"
        alt="Left Grass"
        className="absolute top-[85%] -translate-y-1/2"
        style={{
          left: 0,
          transform: `translateY(-50%) translateX(${-scrollProgress * 80}%)`,
          transition: "transform 0.6s ease-out",
          height: getGrassHeight(),
          zIndex: 50,
          width: "auto",
          pointerEvents: "none",
        }}
      />

      {/* Right Grass */}
      <img
        src="/animatedrightgrass.svg"
        alt="Right Grass"
        className="absolute top-[85%] -translate-y-1/2"
        style={{
          right: 0,
          transform: `translateY(-50%) translateX(${scrollProgress * 80}%)`,
          transition: "transform 0.6s ease-out",
          height: getGrassHeight(),
          width: "auto",
          zIndex: 50,
          pointerEvents: "none",
        }}
      />

      {/* Heading */}
      <h1
        className="absolute bottom-10 z-10 font-instrument text-[#FFFFFFBF] text-center"
        style={{
          textTransform: "uppercase",
          letterSpacing: "-0.1vw",
          fontSize: "11vw", // fluid scaling for all breakpoints
          lineHeight: "0.8",
          width: "100%",
        }}
      >
        WHAT WE DO
      </h1>
    </section>
  );
};

export default WhatWeDoHeading;