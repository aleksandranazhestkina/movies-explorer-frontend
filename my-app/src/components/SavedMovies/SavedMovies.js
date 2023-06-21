import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import * as utils from "../../utils/utils.js";
import Header from "../Header/Header.js";
import Burger from "../Burger/Burger.js";
import Footer from "../Footer/Footer.js";
import Preloader from "../Preloader/Preloader.js";

export default function SavedMovies(props) {
  // Бургеное меню
  const [isOpen, setIsOpen] = useState(false);
  function openBurger() {
    setIsOpen(true);
  }
  function closeBurger() {
    setIsOpen(false);
  }

  //Поиск фильмов
  const [shortMovies, setShortMovies] = useState([]); // фильмы отфильтрованные по длине
  const [notFound, setNotFound] = useState(false);
  const [isErrorDisplaying, setIsErrorDisplaying] = useState(false); //отображение ошибки
  const [filtredSavedMovies, setFiltredSavedMovies] = useState(
    props.savedMovies
  ); // отфильтрованные фильмы по запросу из сохраненных
  const [moviesCheckbox, setMoviesCheckbox] = useState(false); // чекбокс
  const [keyword, setKeyword] = useState(""); // поисковой запрос в форме

  // Фильтрация фильмов
  useEffect(() => {
    const filtredMovies = utils.filterMovies(props.savedMovies, keyword);
    const shortMoviesList = utils.filterShortMovies(filtredMovies, keyword);
    setFiltredSavedMovies(
      moviesCheckbox ? shortMoviesList : filtredMovies
    );
  }, [props.savedMovies, moviesCheckbox, keyword]);

  // Ничего не найдено
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("savedMovies")).length === 0) {
      setIsErrorDisplaying(true);
      setNotFound(false);
    }
    if (filtredSavedMovies.length === 0 && keyword.length >= 1) {
      setNotFound(true);
      setIsErrorDisplaying(false);
    } else {
      setNotFound(false);
    }
  }, [filtredSavedMovies]);

  // Поиск
  function getSavedMovies(res) {
    setKeyword(res);
  }

  // Чекбокс
  function handleShortMovies() {
    setMoviesCheckbox(!moviesCheckbox);
  }

  return (
    <>
      <Header isLoggedIn={props.isLoggedIn} openBurger={openBurger} />
      {isOpen && <Burger isOpen={isOpen} onClose={closeBurger} />}
      <section className="movies">
        <SearchForm
          getSavedMovies={getSavedMovies}
          moviesCheckbox={moviesCheckbox}
          setMoviesCheckbox={setMoviesCheckbox}
          handleShortMovies={handleShortMovies}
          savedMovies={props.savedMovies}
        />
        {isErrorDisplaying && (
          <p className="movies__text">Вы не сохранили еще ни одного фильма</p>
        )}
        {!notFound ? (
          <MoviesCardList
            shortMovies={shortMovies}
            savedMovies={filtredSavedMovies}
            deleteSavedMovie={props.deleteSavedMovie}
          />
        ) : (
          <p className="movies__text">Ничего не найдено</p>
        )}
      </section>
      <Preloader />
      <Footer />
    </>
  );
}
