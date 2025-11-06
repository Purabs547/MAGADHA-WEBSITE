import React from "react";
import Header from "./Header";
import HeroCategory from "./HeroCategory"
import Description from "./Description"
import CTA from "./CTA"
import Footer from "./Footer";
import Villain from "./Villain"; ;
import Environment from "./Environment"; ;

const Home: React.FC = () => {
  return (
    <main className="w-full overflow-hidden">
              <Header/>

     <HeroCategory/>
     <Description/>
     <Villain/>
     <Environment/>
     <CTA/>
    <Footer/>
</main>
  );
};

export default Home;
