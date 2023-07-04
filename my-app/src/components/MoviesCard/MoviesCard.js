import "./MoviesCard.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function MoviesCard(props) {
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(false);

  // Отображение постера карточки
  const imageFilm = `${
    props.movie.image.url === null
      ? `${props.movie.image}`
      : `https://api.nomoreparties.co${props.movie.image?.url}`
  }`;

  // Выбранный фильм
  const selectedMovie = props.savedMovies.find(
    (movie) => movie.nameRU === props.movie.nameRU
  );

  // Отображение лайка
  useEffect(() => {
    if (selectedMovie) {
      setIsSaved(true);
    }
  }, [selectedMovie]);

  // Сохранение фильма
  function likeMovies() {
    props.likeMovie(props.movie);
    if (isSaved === false) {
      setIsSaved(true);
      if(props.movie.duration <= 40) {
        localStorage.setItem("savedShortMovies", JSON.stringify(props.movie))
      }
    }
  }
  // Удаление фильма
  function dislikeMovies() {
    props.deleteSavedMovie(selectedMovie);
    setIsSaved(false);
  }

  return (
    <li className="movies-card">
      <a href={props.movie.trailerLink} target="_blank" rel="noreferrer">
        <img
          src={
            location.pathname === "/saved-movies"
              ? props.movie.image
              : imageFilm
          }
          title={`Описание: ${props.movie.description} \n\nСнято: ${props.movie.country} ${props.movie.year}г.`}
          className="movies-card__image"
          alt={props.movie.nameRU}
        />
      </a>
      <div className="movies-card__info">
        <h3 className="movies-card__name">{props.movie.nameRU}</h3>
        {location.pathname === "/movies" && (
          <button
            type="button"
            className={`movies-card__like movies-card__like${
              isSaved ? "_active" : ""
            }`}
            onClick={isSaved ? dislikeMovies : likeMovies}
          ></button>
        )}
        {location.pathname === "/saved-movies" && (
          <button
            type="button"
            className="movies-card__dislike"
            onClick={dislikeMovies}
          ></button>
        )}
      </div>
      <p className="movies-card__time">{`${Math.trunc(
        props.movie.duration / 60
      )}ч ${props.movie.duration % 60}м`}</p>
    </li>
  );
}
