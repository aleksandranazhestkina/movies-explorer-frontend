import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import "./Header.css";
import logo from "../../images/logo.svg";
import logoAcc from "../../images/icon__COLOR_icon-main.svg";
import burger from "../../images/burger.svg";

export default function Header() {
  const location = useLocation();

  return (
    <header
      className={`header header_color_${
        location.pathname === "/" ? "rose" : "white"
      }`}
    >
      <div className="header__container">
        <Link to="/" className="header__logo-link">
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>
        {loggedIn && (
          <>
            <div className="header__links">
              <Link className="header__link header__link_movies" to="/movies">
                Фильмы
              </Link>
              <Link
                className="header__link header__link_saved-movies"
                to="/saved-movies"
              >
                Сохранённые фильмы
              </Link>
            </div>
            <nav className="header__account">
              <Link className="header__login-container" to="/profile">
                <h3 className="header__login">Аккаунт</h3>
                <div className="header__account-logo-background">
                <img
                  className="header__account-logo"
                  to="/profile"
                  src={logoAcc}
                  alt="значок человека"
                ></img>
                </div>
              </Link>
            </nav>
          </>
        ) }
        {!loggedIn && (
          <>
            <div className="header__links-home">
              <Link className="header__link" to="/signup">
                Регистрация
              </Link>
              <Link className="header__link header__link_signin" to="/signin">
                Войти
              </Link>
            </div>
          </>
        )}
      </div>
      {loggedIn && (
        <button
          className="header__burger-button"
          type="button"
        >
          <img className="header__burger" src={burger} alt="кнопка бургер" />
        </button>
      )}
    </header>
  );
}
