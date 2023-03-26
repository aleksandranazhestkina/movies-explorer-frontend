import "./Movies.css";
import React, { useState, useContext, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Burger from "../Burger/Burger";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import {
  checkMoviesImage,
  strainerRequestMovies,
  filterMoviesDuration,
} from "../../utils/movies.js";
import moviesApi from "../../utils/MoviesApi.js";
import CurrentUserContext from "../../context/CurrentUserContext";

export default function Movies(props) {
  return (
    <>
      <Header loggedIn={props.loggedIn} />
      <Burger />
      <section className="movies">
        <SearchForm />
        <MoviesCardList buttonType="" />
        <p className="movies__text">Ничего не найдено</p>
      </section>
      <Preloader />
      <Footer />
    </>
  );
}
