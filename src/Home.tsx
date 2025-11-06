import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import About from "./About";
import WhatWeDo from "./WhatWeDo";
import FlagShip from "./FlagShip";
import PhilosophySection from "./PhilosophySection";
import Footer from "./Footer";
import WhatWeDoHeading from "./whatWeDoHeading";
import Team from "./Team";

const Home: React.FC = () => {
  return (
    <main className="w-full bg-black overflow-hidden">
      <Header/>
      <HeroSection />
      <About /> 
      <WhatWeDoHeading />
      <WhatWeDo />
      <FlagShip />
      <Team />
      <PhilosophySection />
      <Footer />
</main>
  );
};

export default Home;
