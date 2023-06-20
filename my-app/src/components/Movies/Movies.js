import "./Movies.css";
import React from "react";
import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Burger from "../Burger/Burger";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import * as moviesApi from "../../utils/MoviesApi";
import * as utils from "../../utils/utils.js";

export default function Movies(props) {
  // Бургерное меню
  const [isOpen, setIsOpen] = useState(false);
  function openBurger() {
    setIsOpen(true);
  }
  function closeBurger() {
    setIsOpen(false);
  }

  // Поиск фильмов и сохранение
  const [requestedMovies, setRequestedMovies] = useState([]); // запрошенные фильмы + короткометражки
  const [shortMovies, setShortMovies] = useState([]); // короткометражки
  const [moviesCheckbox, setMoviesCheckbox] = useState(false); // чекбокс
  const [notFound, setNotFound] = useState(false);
  const [isErrorDisplaying, setIsErrorDisplaying] = useState(false); //отображение ошибки

  // Отображение фильмов при нажатии на чекбокс
  function handleShortMovies() {
    // изменение кнопки чекбокса on/off
    setMoviesCheckbox(!moviesCheckbox);

    if (localStorage.getItem("filterSearchedMovies") === null) {
    } else {
      // если список короткометражек пуст при нажатии на чекбокс
      if (
        moviesCheckbox === false &&
        JSON.parse(localStorage.getItem("filterShortSearchedMovies")).length ===
        0
      ) {
        setNotFound(true);
      } else {
        setNotFound(false);
        setRequestedMovies(
          JSON.parse(localStorage.getItem("filterSearchedMovies"))
        );
      }
      // отображение короткометражек
      if (!moviesCheckbox) {
        setRequestedMovies(shortMovies);
        setRequestedMovies(
          JSON.parse(localStorage.getItem("filterShortSearchedMovies"))
        );
      } else {
        setRequestedMovies(requestedMovies);
        setRequestedMovies(
          JSON.parse(localStorage.getItem("filterSearchedMovies"))
        );
        // если список полнометражек пуст при нажатии на чекбокс
        if (
          moviesCheckbox === true &&
          JSON.parse(localStorage.getItem("filterSearchedMovies")).length === 0
        ) {
          setNotFound(true);
        } else {
          setNotFound(false);
          setRequestedMovies(
            JSON.parse(localStorage.getItem("filterSearchedMovies"))
          );
        }
        // отображение полнометражек
        setRequestedMovies(requestedMovies);
        setRequestedMovies(
          JSON.parse(localStorage.getItem("filterSearchedMovies"))
        );
      }
      localStorage.setItem("moviesCheckbox", !moviesCheckbox);
    }
    return;
  }

  // Поиск фильмов по запросу
  function getMovies(keyword) {
    props.setIsLoader(true);
    // получение всех фильмов с сервиса
    moviesApi
      .getMovies()
      .then((movies) => {
        // фильтрация фильмов по запросу и длине
        const searchedMovies = utils.filterMovies(movies, keyword);
        const shortSearchedMovies = utils.filterShortMovies(movies, keyword);
        setRequestedMovies(searchedMovies);
        localStorage.setItem(
          "filterSearchedMovies",
          JSON.stringify(searchedMovies)
        );
        localStorage.setItem(
          "filterShortSearchedMovies",
          JSON.stringify(shortSearchedMovies)
        );
        // полнометражки (фильтрация в зависимости от чекбокса)
        if (!moviesCheckbox) {
          if (searchedMovies.length === 0) {
            setNotFound(true);
            setRequestedMovies([]);
          } else {
            setNotFound(false);
            setShortMovies(shortSearchedMovies);
            setRequestedMovies(searchedMovies);
          }
        }
        // короткометражки (фильтрация в зависимости от чекбокса)
        if (moviesCheckbox) {
          if (shortSearchedMovies.length === 0) {
            setNotFound(true);
            setShortMovies([]);
          } else {
            setNotFound(false);
            setShortMovies(shortSearchedMovies);
            setRequestedMovies(shortSearchedMovies);
          }
        }
        localStorage.setItem("movies", JSON.stringify(movies));
        localStorage.setItem("moviesCheckbox", moviesCheckbox);
        return;
      })
      .catch((err) => {
        console.log(err);
        setIsErrorDisplaying(true);
      })
      .finally(() => props.setIsLoader(false));
  }

  // Отображение информации на странице из локального хранилища
  useEffect(() => {
    if (localStorage.getItem("filterSearchedMovies") === null) {
      setNotFound(true);
    } else {
      if (
        JSON.parse(localStorage.getItem("filterSearchedMovies")).length === 0
      ) {
        setNotFound(true);
      }
      if (
        JSON.parse(localStorage.getItem("filterShortSearchedMovies")).length ===
        0 &&
        localStorage.getItem("moviesCheckbox") === "true"
      ) {
        setNotFound(true);
      }
      if (localStorage.getItem("moviesCheckbox") === "true") {
        setMoviesCheckbox(true);
        setRequestedMovies(
          JSON.parse(localStorage.getItem("filterShortSearchedMovies"))
        );
      } else {
        setMoviesCheckbox(false);
        setRequestedMovies(
          JSON.parse(localStorage.getItem("filterSearchedMovies"))
        );
      }
      if (localStorage.getItem("moviesCheckbox") === null) {
        setMoviesCheckbox(false);
      } else {
        if (localStorage.getItem("moviesCheckbox") === "false") {
          setMoviesCheckbox(false);
        }
        // setMoviesCheckbox(localStorage.getItem(!"moviesCheckbox"));
      }
    }
    return;
  }, []);

  return (
    <>
      <Header isLoggedIn={props.isLoggedIn} openBurger={openBurger} />
      {isOpen && <Burger isOpen={isOpen} onClose={closeBurger} />}
      <section className="movies">
        <SearchForm
          getMovies={getMovies}
          moviesCheckbox={moviesCheckbox}
          setMoviesCheckbox={setMoviesCheckbox}
          handleShortMovies={handleShortMovies}
        />
        {!notFound ? (
          <MoviesCardList
            buttonType=""
            setRequestedMovies={setRequestedMovies}
            requestedMovies={requestedMovies}
            shortMovies={shortMovies}
            savedMovies={props.savedMovies}
            likeMovie={props.likeMovie}
            deleteSavedMovie={props.deleteSavedMovie}
          />
        ) : (
          <p className="movies__text">Ничего не найдено</p>
        )}

        <p
          className={`movies__text ${isErrorDisplaying ? "" : "movies__error_off"
            }`}
        >
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз.
        </p>
      </section>
      <Preloader />
      <Footer />
    </>
  );
}
