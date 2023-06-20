import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function MoviesCardList(props) {
  const width = window.innerWidth;
  const location = useLocation();
  const [displayedCards, setDisplayedCards] = useState(0);

  useEffect(() => {
    handleDisplayiedCards();
  }, []);

  // Отображаемые карточки
  function handleDisplayiedCards() {
    if (width <= 720) {
      setDisplayedCards(5);
    } else if (width <= 990) {
      setDisplayedCards(8);
    } else if (width < 1280) {
      setDisplayedCards(12);
    } else {
      setDisplayedCards(16);
    }
  }

  // Нажатие на кнопку 'Ещё'
  function handleButtonElse() {
    if (width <= 720) {
      setDisplayedCards(displayedCards + 1);
    } else if (width <= 990) {
      setDisplayedCards(displayedCards + 2);
    } else if (width < 1280) {
      setDisplayedCards(displayedCards + 2);
    } else {
      setDisplayedCards(displayedCards + 3);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", handleDisplayiedCards);
    }, 1000);
  });

  return (
    <section className="movies-cards">
      {location.pathname === "/saved-movies" ? (
        <ul className="movies-cards__list">
          {props.savedMovies.map((movie) => (
            <MoviesCard
              movie={movie}
              key={movie._id}
              savedMovies={props.savedMovies}
              savedMoviesList={props.savedMoviesList}
              deleteSavedMovie={props.deleteSavedMovie}
              filtredSavedMovies={props.filtredSavedMovies}
            />
          ))}
        </ul>
      ) : (
        <>
          <ul className="movies-cards__list">
            {props.requestedMovies.slice(0, displayedCards).map((movie) => (
              <MoviesCard
                movie={movie}
                key={movie.id}
                savedMovies={props.savedMovies}
                likeMovie={props.likeMovie}
                deleteSavedMovie={props.deleteSavedMovie}
              />
            ))}
          </ul>
          <button
            className={`movies-cards__else ${
              props.requestedMovies.length > displayedCards
                ? ""
                : "movies-cards__else_off"
            }`}
            onClick={handleButtonElse}
          >
            Ещё
          </button>
        </>
      )}
    </section>
  );
}
