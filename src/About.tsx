import React, { useEffect, useRef, useState } from "react";

const AboutUs: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  return (
    <section
      className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col justify-between"
      style={{
        backdropFilter: "blur(121.8px)",
      }}
    >
      {/* Left Grass Animation */}
      <img
        src="/animatedleftgrass.svg"
        alt="Left Grass"
        className="absolute top-[12%] lg:top-[25%] xl:top-[25%] 2xl:top-[25%] -translate-y-1/2"
        style={{
          left: 0,
          transform: `translateY(-50%) translateX(${-scrollProgress * 80}%)`,
          transition: "transform 0.6s ease-out",
          width: "auto",
          height: "55vh",
          zIndex: 50,
          pointerEvents: "none",
        }}
      />

      {/* Right Grass Animation */}
      <img
        src="/animatedrightgrass.svg"
        alt="Right Grass"
        className="absolute top-[12%] lg:top-[25%] xl:top-[25%] 2xl:top-[25%] -translate-y-1/2"
        style={{
          right: 0,
          transform: `translateY(-50%) translateX(${scrollProgress * 80}%)`,
          transition: "transform 0.6s ease-out",
          width: "auto",
          height: "55vh",
          zIndex: 50,
          pointerEvents: "none",
        }}
      />

      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-[25vh] bg-gradient-to-b from-black via-black/70 to-transparent z-[1]" />

      {/* Large Transparent Heading */}
      <h1
        ref={headingRef}
        className="absolute top-[8%] md:top-[5%] lg:top-[8%] left-1/2 -translate-x-1/2 w-[90%] text-center font-instrument text-[#FFFFFF4F] select-none pointer-events-none z-0"
        style={{
          fontSize: "10vw", // scales naturally for all devices
          lineHeight: "0.9",
          textTransform: "uppercase",
        }}
      >
        about us
      </h1>

      {/* Content Section */}
      <div className="relative z-[3] flex flex-col md:flex-row items-center justify-between w-[90%] md:w-[85%] lg:w-[80%] mx-auto mt-[45vh] md:mt-[35vh] lg:mt-[30vh] mb-[10vh] gap-[5vh]">
        {/* Left Text Section */}
        <div className="w-full flex flex-col gap-[4vh]">
          {/* Point 1 */}
          <div className="flex items-start gap-[2vw]">
            <div
              className="flex text-[5vw] lg:text-[2.5vw] xl:text-[2.5vw] 2xl:text-[2.5vw] items-center justify-center font-samarkan border border-gray-500 rounded-full flex-shrink-0 text-center"
              style={{
                
                width: "4vw",
                height: "4vw",
                minWidth: "40px",
                minHeight: "40px",
              }}
            >
              1
            </div>
            <p
              className="text-gray-300 text-[5vw] md:text-[1.6vw] lg:text-[1.2vw] xl:text-[1.2vw] 2xl:text-[1.2vw]"
              style={{
               
                lineHeight: "1.5em",
              }}
            >
              At Magadha Studios, we believe games should be immersive stories
              that stay with you long after the controller is set down.
            </p>
          </div>

          {/* Point 2 */}
          <div className="flex items-start gap-[2vw]">
            <div
              className="flex text-[5vw] lg:text-[2.5vw] xl:text-[2.5vw] 2xl:text-[2.5vw] items-center justify-center font-samarkan border border-gray-500 rounded-full flex-shrink-0"
              style={{
                width: "4vw",
                height: "4vw",
                minWidth: "40px",
                minHeight: "40px",
              }}
            >
              2
            </div>
            <p
              className="text-gray-300 text-[5vw] md:text-[1.6vw] lg:text-[1.2vw] xl:text-[1.2vw] 2xl:text-[1.2vw]"
              style={{
                lineHeight: "1.5em",
              }}
            >
              Our worlds draw from mythology, history, and culture, blending
              them with mechanics that create a truly promising experience.
            </p>
          </div>

          {/* Point 3 */}
          <div className="flex items-start gap-[2vw]">
            <div
              className="flex text-[5vw] lg:text-[2.5vw] xl:text-[2.5vw] 2xl:text-[2.5vw] items-center justify-center font-samarkan border border-gray-500 rounded-full flex-shrink-0"
              style={{
                width: "4vw",
                height: "4vw",
                minWidth: "40px",
                minHeight: "40px",
              }}
            >
              3
            </div>
            <p
              className="text-gray-300 text-[5vw] md:text-[1.6vw] lg:text-[1.2vw] xl:text-[1.2vw] 2xl:text-[1.2vw]"
              style={{
                lineHeight: "1.5em",
              }}
            >
              We are showcasing our potential as an indigenous team and proving
              that we have what it takes to leave a mark in the gaming world.
            </p>
          </div>
        </div>

        {/* Shield Image */}
        <img
          src="/shield.svg"
          alt="Shield"
          className="object-contain w-[450px] md:w-[420px] lg:w-[520px] 2xl:w-[650px] drop-shadow-[0_0_40px_rgba(255,215,0,0.25)]"
        />
      </div>

      
    </section>
  );
};

export default AboutUs;
