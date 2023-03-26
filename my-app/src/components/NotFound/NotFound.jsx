import "./NotFound.css";
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="not-found">
      <h2 className="not-found__error-numder">404</h2>
      <p className="not-found__error-name">Страница не найдена</p>
      <Link className="not-found__button" to="/">
        Назад
      </Link>
    </section>
  );
}
