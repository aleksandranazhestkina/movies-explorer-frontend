import * as constants from "./constants";

export function checkRequestResult(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(
      `Произошла ошибка ${res.status} - ${res.statusText}`
    );
  }
}

// Фильтр фильмов по запросу
export function filterMovies(beatFilms, keyword) {
  const filteredMovies = beatFilms.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(keyword.toLowerCase());
  });
  return filteredMovies;
}

// Фильтр фильмов по длительности
export function filterShortMovies(beatFilms, keyword) {
  const filteredShortMovies = beatFilms.filter((movie) => {
    return (
      movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) &&
      movie.duration <= constants.SHORT_MOVIES_DURATION
    );
  });
  return filteredShortMovies;
}