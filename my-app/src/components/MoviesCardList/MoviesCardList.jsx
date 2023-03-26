import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.jsx";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useScreenWidth from "../../hooks/useScreenWidth.jsx";
import { DEVICE_PARAMS } from "../../utils/constants.js";
// import {
//   WIDTH_DESKTOP,
//   WIDTH_TABLET,
//   WIDTH_MOBILE,
//   CARD_NUMBER_DESKTOP,
//   CARD_NUMBER_TABLET,
//   CARD_NUMBER_MOBILE,
//   CARDS_ELSE_DESKTOP,
//   CARDS_ELSE_TABLET,
//   CARDS_ELSE_MOBILE,
// } from "../../utils/constants.js";

export default function MoviesCardList() {
  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        <MoviesCard />
      </ul>
      <button className="movies-cards__else">Ещё</button>
    </section>
  );
}
