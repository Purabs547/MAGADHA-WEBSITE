import React, { useState } from "react";
import { motion } from "framer-motion";

const characters = [
  { id: 1, name: "Realistic 3D", img: "/characters/e1.png", glow: "from-[#FF5F6D] to-[#FFC371]" },
  { id: 2, name: "Mythic 3D", img: "/characters/e2.png", glow: "from-[#00C9FF] to-[#92FE9D]" },
  { id: 3, name: "Heroic 3D", img: "/characters/e3.png", glow: "from-[#7F00FF] to-[#E100FF]" },
  { id: 4, name: "Epic 3D", img: "/characters/e4.png", glow: "from-[#FF512F] to-[#F09819]" },
  { id: 5, name: "Legend 3D", img: "/characters/e5.png", glow: "from-[#36D1DC] to-[#5B86E5]" },
  { id: 6, name: "Ancient 3D", img: "/characters/e6.png", glow: "from-[#FF9966] to-[#FF5E62]" },
  { id: 7, name: "Divine 3D", img: "/characters/e7.png", glow: "from-[#00B09B] to-[#96C93D]" },
  { id: 8, name: "Fantasy 3D", img: "/characters/e8.png", glow: "from-[#ED213A] to-[#93291E]" },
  { id: 9, name: "Mystic 3D", img: "/characters/e9.png", glow: "from-[#2AF598] to-[#009EFD]" },
  { id: 10, name: "Celestial 3D", img: "/characters/e10.png", glow: "from-[#F7971E] to-[#FFD200]" },
];

const Environment: React.FC = () => {
    const [visibleCount, setVisibleCount] = useState(6);

  const handleToggle = () => {
    if (visibleCount >= characters.length) {
      setVisibleCount(6);
    } else {
      setVisibleCount((prev) => Math.min(prev + 4, characters.length));
    }
  };

  const isExpanded = visibleCount >= characters.length;

  return (
    <section className="relative w-full min-h-screen bg-black text-white   overflow-hidden">
      {/* Title */}
      <h2 className="text-center font-instrument text-3xl md:text-7xl font-bold mb-12 
  bg-gradient-to-t from-white via-gray-700 to-black bg-clip-text text-transparent">
  Environment
</h2>


      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-14 sm:gap-x-6 px-4 md:px-12 max-w-full mx-auto relative z-10">
        {characters.slice(0, visibleCount).map((char) => (
          <motion.div
            key={char.id}
            whileHover={{ scale: 1.05 }}
            className="relative group flex items-center justify-center"
          >
            {/* 3D Gradient Glow */}
            <div
              className={`absolute -inset-2 rounded-2xl bg-gradient-to-tr ${char.glow} opacity-0 group-hover:opacity-100 blur-2xl transition duration-500`}
            ></div>

            {/* Card Container */}
            <div className="relative z-10 overflow-hidden rounded-xl bg-[#0f0f0f] border border-gray-700 backdrop-blur-sm shadow-xl">
              <img
                src={char.img}
                alt={char.name}
                className="w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px] object-cover"
              />

              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-100">
                <p className="text-lg md:text-xl font-semibold text-white tracking-wide">
                  Coming Soon
                </p>
              </div>

              {/* Bottom Left Text */}
              <div className="absolute bottom-4 left-4">
                <h3 className="text-sm sm:text-base font-semibold">
                  {char.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">Character</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center -mb-20   mt-10 relative z-10">
        <button
          onClick={handleToggle}
          className="px-8 py-2 md:px-10 md:py-3 2xl:py-6 
          bg-gradient-to-r from-white/20 to-gray-200/10 
          backdrop-blur-md border border-white/20 
          rounded-full font-instrument font-semibold text-sm md:text-base xl:text-3xl 
          text-white hover:from-white/30 hover:to-gray-200/20 transition 
          shadow-[0_0_25px_rgba(255,255,255,0.15)]"
        >
          {isExpanded ? "View Less" : "View More"}
        </button>
      </div>

      {/* Bottom Grass */}
      <div className="mt-20 relative w-full">
        <img
          src="/portfolio/bottom-grass.svg"
          alt="Grass"
          className="w-full object-cover h-[110px] md:h-[250px] lg:h-[380px] 2xl:h-[600px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default Environment;
