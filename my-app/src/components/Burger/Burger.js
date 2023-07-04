import "./Burger.css";
import React from "react";
import { NavLink } from "react-router-dom";
import logoAcc from "../../images/icon__COLOR_icon-main.svg";
import closeButton from "../../images/close-button.svg";

export default function Burger(props) {
  return (
    <section
      className={`burger ${props.isOpen ? "burger_opened" : ""}`}
      // onClick={props.onClose}
    >
      <div className="burger__container">
        <nav className="burger__links">
          <div className="burger__links-container">
            <button
              className="burger__button"
              type="button"
              onClick={props.onClose}
            >
              <img
                className="burger__button-image"
                src={closeButton}
                alt="кнопка закрыть"
              />
            </button>
            <NavLink
              exact
              to="/"
              className="burger__link"
              activeClassName="burger__link_active"
            >
              Главная
            </NavLink>
            <NavLink
              to="/movies"
              className="burger__link"
              activeClassName="burger__link_active"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="burger__link"
              activeClassName="burger__link_active"
            >
              Сохранённые фильмы
            </NavLink>
          </div>
          <NavLink
            to="/profile"
            className="burger__link burger__link_account"
            activeClassName="burger__link_active"
          >
            <h3 className="burger__login">Аккаунт</h3>
            <div className="burger__account">
              <img
                className="burger__account-logo"
                src={logoAcc}
                alt="иконка аккаунта"
              />
            </div>
          </NavLink>
        </nav>
      </div>
    </section>
  );
}
