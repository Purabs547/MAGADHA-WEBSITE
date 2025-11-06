import React from "react";
import { motion } from "framer-motion";

const VisionSection: React.FC = () => {
  return (
    <section className="relative w-full lg:min-h-screen h-[90vh]   md:h-[120vh] lg:h-[110vh] 2xl:h-[80vh] xl:h-[120vh] overflow-hidden bg-black text-white flex md:items-center  items-start  justify-center pt-16 md:pt-24 lg:pt-32">
      {/* LEFT CHARACTER */}
      <motion.img
        src="/portfolio/left-character1.png"
        alt="Left character"
        className="absolute left-0 md:top-18 xl:bottom-28 2xl:top-32 bottom-40 w-[100px] sm:w-[110px] md:w-[160px] lg:w-[200px] xl:w-[290px] 2xl:w-[400px] object-contain"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* RIGHT CHARACTER */}
      <motion.img
        src="/portfolio/right-character1.svg"
        alt="Right character"
        className="absolute right-0 2xl:-right-10 md:top-18 bottom-30 md:bottom-50  lg:bottom-40 xl:-bottom-4  2xl:top-32 w-[140px] sm:w-[180px] md:w-[180px] lg:w-[280px] xl:w-[340px] 2xl:w-[500px] object-contain"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* TEXT SECTION */}
      <div className="relative z-10 2xl:-mb-12 font-instrument mt-10 md:mt-0 text-center px-4 sm:px-6 md:px-12 max-w-2xl md:max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-[1500px]">
        <h1 className="text-2xl sm:text-3xl text-[#FFFFFF] md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-7xl lg:mr-14 font-bold mb-4">
          Every Game Begins With a Vision
        </h1>
        <p className="text-gray-400 text-sm font-instrument opacity-60 sm:text-base lg:mr-24 md:text-lg lg:text-3xl 2xl:text-3xl  leading-relaxed">
          At Magadha, we don’t
          just build games — we build experiences that transport players into
          unforgettable realms. Discover the artistry, innovation, and
          dedication behind every title we create.
        </p>
          {/* <div className="absolute hidden xl:block inset-0 bg-gradient-to-t from-black via-black/5 to-transparent pointer-events-none z-10" /> */}

      </div>

      {/* BOTTOM GRASS IMAGE */}
      <div className="absolute bottom-24 md:-bottom-5 xl:-bottom-32 2xl:-bottom-72 w-full">

        <img
          src="/portfolio/bottom-grass.svg"
          alt="Grass"
          className="w-full object-cover h-[110px] md:h-[300px] lg:h-[410px] 2xl:h-[690px]"
        />

      </div>


      
    </section>
  );
};

export default VisionSection;
