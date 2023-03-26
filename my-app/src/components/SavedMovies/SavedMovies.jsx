import React, { useState, useContext, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import {
  strainerRequestMovies,
  filterMoviesDuration,
} from "../../utils/movies.js";
import Header from "../Header/Header.jsx";
import Burger from "../Burger/Burger";
import Footer from "../Footer/Footer";
import CurrentUserContext from "../../context/CurrentUserContext.js";

export default function SavedMovies() {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Burger />
      <section className="movies">
        <SearchForm />
        <MoviesCardList />
        <p className="movies__text">Ничего не найдено</p>
      </section>
      <Footer />
    </>
  );
}
