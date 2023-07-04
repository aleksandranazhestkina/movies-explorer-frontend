import { BASE_URL } from './constants';
import { checkRequestResult } from "./utils";

export function register(name, email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      password,
    })
  })
    .then((res) => checkRequestResult(res))
    .then((data) => {
      return data;
    })
};

export function login(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then((res) => checkRequestResult(res))
    .then((data) => {
      return data;
    })
};

export function getUserInfo() {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((res) => checkRequestResult(res))
    .then((data) => {
      return data;
    })
}

export function getContent() {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  })
    .then((res) => checkRequestResult(res));
}

export function updateProfile(name, email) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({ name, email }),
  })
    .then((res) => checkRequestResult(res));
}

// Получение сохраненных фильмов
export function getSavedMovies() {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((res) => checkRequestResult(res));
}

export function saveMovie(data) {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: `https://api.nomoreparties.co${data.image?.url}`,
      trailerLink: data.trailerLink,
      thumbnail: `https://api.nomoreparties.co${data.image?.formats?.thumbnail?.url}`,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
      movieId: data.id,
    }),
  })
    .then((res) => checkRequestResult(res))
    .then((data) => {
      return data;
    })
}

export function deleteMovie(movieId) {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  })
    .then((res) => checkRequestResult(res));
}
