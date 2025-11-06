import { useState } from "react";

const letterVideos = {
  M: "/media/77.mp4",
  A: "/media/55.mp4",
  G: "/media/33.mp4",
  D: "/media/44.mp4",
  H: "/media/11.mp4",
} as const;

type LetterKey = keyof typeof letterVideos;

const HeroSection = () => {
  const [currentVideo, setCurrentVideo] = useState("");
  const [clickedLetter, setClickedLetter] = useState<LetterKey | "">("");
  const magadha: LetterKey[] = ["M", "A", "G", "A", "D", "H", "A"];

  return (
    <section
      className="relative flex items-center justify-center w-full overflow-hidden text-white bg-black"
      style={{
        minHeight: "130vh",
        backgroundImage: 'url("/media/22 (2).gif")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Video */}
      {currentVideo && (
        <video
          key={currentVideo}
          src={currentVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 z-0 object-cover w-full h-full"
        />
      )}

      {/* Content */}
      <div className="relative z-20 text-center w-[90%] md:w-[80%] lg:w-[70%] mx-auto md:-mt-[40vh] lg:-mt-[30vh]">
        <h1
          className="font-bold text-[6vw] md:lg:text-[2vw] lg:text-[5vw] xl:text-[5vw] 2xl:text-[4.2vw] tracking-wide mb-[2vh]"
          style={{
            color: "#FFFFFF8C",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          A TALE OF UNDETERRED FAITH
        </h1>

        <p
          className="mx-auto text-[5vw] lg:text-[1.2vw] md:text-[1.2vw] xl:text-[1.2vw] 2xl:text-[1.2vw]"
          style={{
            color: "#FFFFFF8C",
            textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
            fontFamily: "Helvetica, Arial, sans-serif",
            
            maxWidth: "92%",
            lineHeight: "1.6em",
            marginTop: "-1%",
          }}
        >
          Magadha Studios crafts story-driven games rooted in Indian lore and emotion. We blend ancient legends with modern gameplay to create unforgettable journeys.
        </p>

        {/* MAGADHA letters */}
        <h2
          className="flex items-center justify-center text-center uppercase select-none font-instrument mb-[-15%] xl:mb-[-1%] 2xl:mb-[-8%]"
          style={{
            marginTop: "10%",
            fontWeight: 700,
            fontSize: "11vw", // scales dynamically
            color: "#FFFFFF4F",
            lineHeight: "0.9",
          }}
        >
          {magadha.map((letter, index) => (
            <span
              key={index}
              onMouseEnter={() =>
                !clickedLetter && setCurrentVideo(letterVideos[letter] || "")
              }
              onMouseLeave={() => !clickedLetter && setCurrentVideo("")}
              onClick={() => {
                setClickedLetter(letter);
                setCurrentVideo(letterVideos[letter] || "");
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const circle = e.currentTarget.querySelector(
                  ".hover-circle-wrapper"
                );
                if (circle instanceof HTMLElement) {
                  circle.style.left = `${x}px`;
                  circle.style.top = `${y}px`;
                }
              }}
              className="relative inline-block transition-transform duration-300 group hover:scale-105 hover:text-white"
              style={{
                width: "auto",
                position: "relative",
              }}
            >
              {letter}
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none group-hover:opacity-100">
                <div className="absolute hover-circle-wrapper">
                  <div className="hover-circle relative w-[2vw] h-[2vw] rounded-full flex items-center justify-center">
                    <svg
                      className="arrow-svg animate-bounce"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      width="1.2vw"
                      height="1.2vw"
                    >
                      <line x1="12" y1="4" x2="12" y2="16" />
                      <polyline points="8 12 12 16 16 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </span>
          ))}
        </h2>
      </div>

      {/* Grass Decoration */}
      <img
        src="/herosection-Grass1.png"
        alt="Grass decoration"
        className="absolute bottom-[-7%] lg:bottom-[-22%] xl:bottom-[-23%] 2xl:bottom-[-34%] left-1/2 w-[160vw] max-w-none -translate-x-1/2 object-cover z-50"
     
      />
    </section>
  );
};

export default HeroSection;
