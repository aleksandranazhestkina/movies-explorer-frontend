import "./Burger.css";
import React from "react";
import { Link } from "react-router-dom";
import logoAcc from "../../images/icon__COLOR_icon-main.svg";
import closeButton from "../../images/close-button.svg";

export default function Burger() {
  return (
    <section
    className={`burger ${isOpen ? "burger_opened" : ""}`}
  >
    <div className="burger__container">
    <nav className="burger__links">
      <div className="burger__links-container">  
      <button className="burger__button" type="button">
        <img
          className="burger__button-image"
          src={closeButton}
          alt="кнопка закрыть"
        />
      </button>
      <a href="/" className="burger__link">
        Главная
      </a>
      <a href="/movies" className="burger__link burger__link_movies">
        Фильмы
      </a>
      <a href="/saved-movies" className="burger__link">
        Сохранённые фильмы
      </a>
      </div>
      <Link
        to="/profile"
        className="burger__link burger__link_account"
      >
        <h3 className="burger__login">Аккаунт</h3>
        <div className="burger__account">
          <img
            className="burger__account-logo"
            src={logoAcc}
            alt="иконка аккаунта"
          />
        </div>
      </Link>
      </nav>
    </div>
  </section>
  );
}
