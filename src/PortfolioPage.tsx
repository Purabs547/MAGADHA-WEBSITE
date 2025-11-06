import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PortfolioHero from "./PortfolioHero";
import CreatorsRealm from './CreatorsRealm'
import EnvironmentSection from "./EnvironmentSection";
import CharacterSection from "./CharacterSection";
import Art from "./Art";
import Props from "./Props";

const Portfolio: React.FC = () => {
  return (
    <main className="w-full bg-black overflow-hidden">
    <Header/>
    <PortfolioHero/>
    <CharacterSection/>
    <Props/>
    <EnvironmentSection/>
    <Art/>
     <CreatorsRealm />
    <Footer/>
</main>
  );
};

export default Portfolio
