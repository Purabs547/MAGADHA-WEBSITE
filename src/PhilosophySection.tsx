import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PhilosophySection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [rotation, setRotation] = useState(0);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const leftTexts = ["Mythic Roots, Modern", "Ancient Modern, Wisdom ", "Eternal Stories, Modern"];
  const rightTexts = [
    "Modern We reinterpret timeless tales with fresh mechanics.",
    "Fresh We reinterpret timeless tales with fresh mechanics.",
    "Timeless We reinterpret timeless tales with fresh mechanics.",
  ];

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      if (headingRef.current) {
        const rect = headingRef.current.getBoundingClientRect();
        const headingTop = rect.top;
        const windowHeight = window.innerHeight;
        
        // Calculate how much the heading is in view (0 to 1)
        const progress = Math.max(0, Math.min(1, (windowHeight - headingTop) / windowHeight));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto rotate text every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleSpin("right");
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSpin = (dir: "left" | "right") => {
    setRotation((prev) => (dir === "right" ? prev + 120 : prev - 120));
    setCurrentText((prev) =>
      dir === "right"
        ? (prev + 1) % leftTexts.length
        : (prev - 1 + leftTexts.length) % leftTexts.length
    );
  };

  return (
    <section className="relative w-full min-h-screen -mt-[240px]  bg-black overflow-hidden">
      {/* Animated Left Grass */} 
      <img
        src="/animatedleftgrass.svg"
        alt="Left Grass"
        style={{
          position: 'absolute',
          left: 0,
          top: 'calc(10% + 50px)',
          transform: `translateY(-50%) translateX(${-scrollProgress * 100}%)`,
          transition: 'transform 0.6s ease-out',
          width: 'auto',
          height: '60vh',
          zIndex: 50,
          pointerEvents: 'none'
        }}
      />

      {/* Animated Right Grass */}
      <img
        src="/animatedrightgrass.svg"
        alt="Right Grass"
        style={{
          position: 'absolute',
          right: 0,
          top: 'calc(10% + 50px)',
          transform: `translateY(-50%) translateX(${scrollProgress * 100}%)`,
          transition: 'transform 0.6s ease-out',
          width: 'auto',
          height: '60vh',
          zIndex: 50,
          pointerEvents: 'none'
        }}
      />

      {/* Heading */}
      <h2 ref={headingRef} className="text-center text-white text-[9vh] mt-10 md:mt-0 md:text-[20vh] font-instrument tracking-wide pt-10">
        Our Philosophy
      </h2>

      {/* Rotating Wheel and Text */}
      <div className="relative flex justify-center items-center mt-8">
        {/* Left Text */}
        <div className="absolute left-8 md:top-0 max-w-[500px] -translate-y-1/2 text-left text-white font-bold md:text-6xl transition-all duration-700">
          {leftTexts[currentText]}
        </div>
        <div className="absolute left-8 top-32 md:top-24 max-w-xs -translate-y-1/2 text-left text-white font-bold md:text-6xl transition-all duration-700">
          Play -
        </div>

        {/* Wheel + Arrows */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={() => handleSpin("left")}
            className="absolute left-[-65px] md:left-[-100px] z-10 top-48 md:top-48 border-[#7575756E] border hover:bg-white/20 rounded-full p-3 transition"
          >
            <ChevronLeft className="text-[#7575756E] lg:w-16 lg:h-16 md:w-8  md:h-8" />
          </button>

          {/* Wheel Image */}
          <img
            src="/wheel12.png"
            alt="wheel"
            className={`md:w-[398px] lg:w-[668px] xl:w-[368px] 2xl:w-[568px] object-cover h-60 mt-28 md:mt-0 lg:h-[650px] xl:h-[380px] 2xl:h-[550px]  md:h-[400px] -mb-32 md:-mb-44 lg:-mb-96 xl:-mb-44 2xl:-mb-[55%] z-10 opacity-90 transition-transform duration-[1500ms] ease-in-out`}
            style={{ transform: `rotate(${rotation}deg)` }}
          />

          {/* Right Arrow */}
          <button
            onClick={() => handleSpin("right")}
            className="absolute right-[-65px] md:right-[-100px] z-10 top-48 md:top-48 border-[#7575756E] border hover:bg-white/20 rounded-full p-3 transition"
          >
            <ChevronRight className="text-[#7575756E] lg:w-16 lg:h-16 md:w-8  md:h-8" />
          </button>
        </div>

        {/* Right Text */}
        <div className="absolute -right-10 md:-right-32 lg:md:right-16 top-4 -translate-y-1/2 text-left text-white md:text-base lg:text-3xl 2xl:text-3xl lg:max-w-lg max-w-sm md:max-w-sm">
          <p className="transition-all duration-700">{rightTexts[currentText]}</p>
        </div>
      </div>

      {/* Bottom Animated Section */}
      <div className="relative rounded-b-[50px] w-full h-[500px] md:h-[800px] lg:h-[1000px] overflow-hidden">
        <img
          src="/mythic-temple.gif"
          alt="Mythic Temple"
          className="w-full h-full object-cover"
        />
        <div className="absolute mb-10 inset-0 flex flex-col items-center justify-center md:justify-end text-center text-white">
          <h3 className="text-4xl md:text-9xl font-instrument font-semibold  lg:mb-8 md:mb-2" style={{
            color: "#FFFFFF8C",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}>Start Your journey</h3>
          <p className="text-lg md:text-xl text-gray-300 font-helvetica mb-4"
          style={{
            color: "#FFFFFF8C",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}>
            Be part of the legend. Follow our journey as we bring artistry and
            mythic worlds to life.
          </p>
          <div className="flex mt-5 font-helvetica gap-4 md:gap-14">
            <button className="border border-white px-6 py-2 rounded-md text-lg hover:bg-white hover:text-black transition">
              Follow Us
            </button>
            <button className="border border-white px-6 py-2 rounded-md text-lg hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
