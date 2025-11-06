import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Environment() {
  const [selected, setSelected] = useState("grand-temple");
  const [windowWidth, setWindowWidth] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const headingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const manualClick = useRef(false);

  const mediaMap: Record<string, string> = {
    "grand-temple": "/Across_Temple.mp4",
    "divine-cave": "/Shivji's_puzzle_room.mp4",
    "river-sayja": "/videos/river-sayja.mp4",
    "forgotten-dungeon": "/Mayasur_Arena.mp4",
    "forest-beyond": "/77.mp4",
  };

  const environmentDetails: Record<
    string,
    { title: string; description: string }
  > = {
    "grand-temple": {
      title: "The Grand Temple",
      description:
        "A place of divine power, where ancient energy still flows.",
    },
    "divine-cave": {
      title: "The Divine Cave",
      description:
        "A place where you find more questions than answers, and is riddled with puzzles.",
    },
    "river-sayja": {
      title: "The River Sayja",
      description:
        "A mystical river flowing through the heart of Magadha, said to have healing powers.",
    },
    "forgotten-dungeon": {
      title: "The Forgotten Dungeon",
      description: "An ancient dungeon filled with secrets and hidden dangers.",
    },
    "forest-beyond": {
      title: "The Forest Beyond",
      description:
        "A dense forest where few dare to venture, home to magical creatures.",
    },
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🌿 Scroll progress for grass animation
  useEffect(() => {
    const handleScrollProgress = () => {
      if (!headingRef.current) return;
      const rect = headingRef.current.getBoundingClientRect();
      const headingTop = rect.top - 400;
      const windowHeight = window.innerHeight;
      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - headingTop) / windowHeight)
      );
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScrollProgress);
    handleScrollProgress();
    return () => window.removeEventListener("scroll", handleScrollProgress);
  }, []);

  // 🌟 GSAP pin + scroll-triggered section control
  useEffect(() => {
    if (windowWidth < 768) return; // Skip on mobile
    const ctx = gsap.context(() => {
      const section = containerRef.current;
      const keys = Object.keys(environmentDetails);
      const total = keys.length;

      if (!section) return;

      gsap.to({}, {
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${total * 100}%`, // length to hold scroll
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const index = Math.min(
              Math.floor(progress * total),
              total - 1
            );
            setSelected(keys[index]);
          },
        },
      });
    });
    return () => ctx.revert();
  }, [windowWidth]);

  const activeVideo = selected ? mediaMap[selected] : null;

  // 🧭 Click handler (unchanged)
  const handleClick = (key: string) => {
    manualClick.current = true;
    setSelected(key);
    const element = sectionRefs.current[key];
    if (element) {
      window.scrollTo({
        top:
          window.scrollY +
          element.getBoundingClientRect().top -
          window.innerHeight / 3,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={containerRef}
      className="w-full bg-black text-white relative min-h-[240vh] md:min-h-screen  overflow-hidden py-16 sm:py-24 md:py-48 xl:py-60 2xl:py-72 z-30"
    >
      {/* Animated Left Grass */}
      <img
        src="/animatedleftgrass.svg"
        alt=""
        aria-hidden
        className="absolute left-0 md:top-[10%] top-[7%] h-[40vh] md:h-[55vh] object-contain pointer-events-none z-50"
        style={{
          transform: `translateY(-50%) translateX(${-scrollProgress * 100}%)`,
          transition: "transform 0.6s ease-out",
        }}
      />

      {/* Animated Right Grass */}
      <img
        src="/animatedrightgrass.svg"
        alt=""
        aria-hidden
        className="absolute right-0 md:top-[10%] top-[7%] h-[40vh] md:h-[55vh] object-contain pointer-events-none z-50"
        style={{
          transform: `translateY(-50%) translateX(${scrollProgress * 100}%)`,
          transition: "transform 0.6s ease-out",
        }}
      />

      {/* Decorative Heading */}
      <h1
        ref={headingRef}
        className="absolute top-[5px] left-1/2 -translate-x-1/2 text-[37px] md:text-[90px] lg:text-[120px] 2xl:text-[170px] text-[#FFFFFF] font-[Instrument Sans] font-semibold select-none pointer-events-none whitespace-nowrap leading-[0.9]"
      >
        The Environments
      </h1>

      {/* Content */}
      <div className="px-4 sm:px-6 md:px-12 2xl:mt-24 z-20">
        <div className="flex flex-col md:flex-row w-full md:justify-between items-start gap-10 md:gap-16 lg:gap-24 xl:gap-32">
          {/* Left side - Titles */}
          <div className="relative w-full md:w-1/2 order-2 md:order-1 md:h-fit">
            <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-white/80 hidden md:block" />
            <div className="pl-2 sm:pl-6 md:pl-12 lg:pl-16">
              <ul className="space-y-8 sm:space-y-10 lg:space-y-12 2xl:space-y-16">
                {Object.keys(environmentDetails).map((key) => {
                  const env = environmentDetails[key];
                  const isActive = selected === key;
                  return (
                    <li
                      key={key}
                      ref={(el) => { sectionRefs.current[key] = el; }}
                    >
                      <button
                        onClick={() => handleClick(key)}
                        className={`text-left w-full font-bold transition-all duration-500 ease-out transform ${
                          isActive
                            ? "text-white scale-110"
                            : "text-gray-600 scale-100 hover:text-gray-400"
                        } text-xl sm:text-2xl md:text-xl xl:text-4xl 2xl:text-4xl`}
                      >
                        {env.title}
                      </button>
                      {isActive && (
                        <div className="mt-3 transition-opacity duration-500 ease-in-out">
                          <p className="text-sm sm:text-base md:text-lg text-gray-300 xl:text-2xl 2xl:text-3xl max-w-[600px]">
                            {env.description}
                          </p>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Right side - Video */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <div
              className={` w-[360px] sm:w-[500px] md:w-[500px] lg:w-[720px] xl:w-[850px] 2xl:w-[1000px]
                h-[220px] sm:h-[300px] md:h-[390px] lg:h-[400px] xl:h-[400px] 2xl:h-[500px]
                rounded-[18px] overflow-hidden bg-gray-900 mx-auto transition-all duration-700 ease-in-out ${
                  selected
                    ? "scale-105 shadow-[0_0_25px_rgba(255,255,255,0.15)]"
                    : "scale-100"
                }`}
            >
              {activeVideo ? (
                <video
                  key={activeVideo}
                  src={activeVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover block transition-opacity duration-500 ease-in-out"
                />
              ) : (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="/videos/divine-cave.mp4"
                  className="w-full h-full object-cover block"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Foreground Grass */}
      <img
        src="/villinGrass2.png"
        alt="foreground grass"
        className="relative left-1/2 w-[150vw] max-w-none object-cover"
        style={{
          transform: `translateX(calc(-50% + ${scrollProgress * 20}px))`,
          transition: "transform 0.6s ease-out",
        }}
      />
    </section>
  );
}
