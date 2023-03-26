import React from "react";
import { useState } from "react";
import Promo from "../Promo/Promo.jsx";
import AboutProject from "../AboutProject/AboutProject.jsx";
import Techs from "../Techs/Techs.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import Portfolio from "../Portfolio/Portfolio.jsx";
import "./Main.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Burger from "../Burger/Burger"

export default function Main({loggedIn}) {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerOpen(true);
  };
  const handleCloseClick = () => {
    setIsBurgerOpen(false);
  };
  return (
    <>
      <Header loggedIn={loggedIn} handleBurgerClick={handleBurgerClick} />
      {isBurgerOpen && (
        <Burger isOpen={isBurgerOpen} handleCloseClick={handleCloseClick} />
      )}
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
