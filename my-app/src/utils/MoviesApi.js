import { MOVIES_URL } from './constants';

export function getMovies() {
  return fetch(`${MOVIES_URL}`, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
  })
      .then(res => res.json())
      .then(data => data)
}