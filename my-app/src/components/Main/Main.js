import React from "react";
import { useState } from "react";
import Promo from "../Promo/Promo.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Techs from "../Techs/Techs.js";
import AboutMe from "../AboutMe/AboutMe.js";
import Portfolio from "../Portfolio/Portfolio.js";
import "./Main.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Burger from "../Burger/Burger.js";

export default function Main(props) {
  // Бургеное меню
  const [isOpen, setIsOpen] = useState(false);

  function openBurger() {
    setIsOpen(true);
  }

  function closeBurger() {
    setIsOpen(false);
  }

  return (
    <>
      <Header isLoggedIn={props.isLoggedIn} openBurger={openBurger} />
      {isOpen && <Burger isOpen={isOpen} onClose={closeBurger} />}
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
