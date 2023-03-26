import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { convertingDuration } from "../../utils/movies.js";

export default function MoviesCard() {
  return (
    <li className="movies-card">
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img
          src={movie.image}
          title={`Описание: ${movie.description} \n\nСнято: ${movie.country} ${movie.year}г.`}
          className="movies-card__image"
          alt={movie.nameRU}
        />
      </a>
      <div className="movies-card__info">
        <h3 className="movies-card__name">{movie.nameRU}</h3>
        {location.pathname === "/movies" && (
          <button
            type="button"
            className={`movies-card__like movies-card__like${
              saved ? "_active" : ""
            }`}
          ></button>
        )}
        {location.pathname === "/saved-movies" && (
          <button type="button" className="movies-card__dislike"></button>
        )}
      </div>
      <p className="movies-card__time">{convertingDuration(movie.duration)}</p>
    </li>
  );
}
