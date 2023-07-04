import React from "react";
import { useEffect, useContext, useState } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { useFormWithValidation } from "../../hooks/useFormValidation";
import CurrentUserContext from "../../context/CurrentUserContext";
import Burger from "../Burger/Burger";
// import {  USER_NAME_PATTERN } from "../../utils/constants";

export default function Profile(props) {
  const { values, setValues, handleChange, isValid, errors, resetForm } =
    useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);

  // Бургеное меню
  const [isOpen, setIsOpen] = useState(false);

  function openBurger() {
    setIsOpen(true);
  }

  function closeBurger() {
    setIsOpen(false);
  }

  // Редактирование профиля
  function handleProfileSubmit(e) {
    e.preventDefault();
    props.onEditProfile(values.name, values.email);
    resetForm(currentUser, {}, false);
  }

  // Заполнение инпутов
  useEffect(() => {
    setValues(currentUser);
  }, [setValues, currentUser]);

  return (
    <>
      <Header isLoggedIn={props.isLoggedIn} openBurger={openBurger} />
      {isOpen && <Burger isOpen={isOpen} onClose={closeBurger} />}
      <section className="profile">
        <form
          className="profile__form"
          name="profile"
          noValidate
          onSubmit={handleProfileSubmit}
        >
          <h1 className="profile__hello">{`Привет, ${currentUser.name}!`}</h1>
          <div className="profile__container">
            <span className="profile__error">{errors.name}</span>
            <p className="profile__text">
              Имя
              <input
                name="name"
                className="profile__input profile__input_name"
                type="text"
                required
                value={values.name || ""}
                minLength="2"
                maxLength="30"
                // pattern={USER_NAME_PATTERN}
                onChange={handleChange}
              />
            </p>
            <p className="profile__text profile__text_email">
              E-mail
              <input
                name="email"
                className="profile__input"
                type="email"
                value={values.email || ""}
                pattern="^\S+@\S+\.\S+$"
                required
                onChange={handleChange}
              />
            </p>
            <span className="profile__error">{errors.email}</span>
          </div>
          <span className="profile__message">{props.profileMessage}</span>
          <button
            className={`profile__button profile__footer ${!isValid ? "profile__button_disabled" : ""
              }`}
            type="submit"
            disabled={!isValid}
          >
            Редактировать
          </button>
          <button
            type="submit"
            className="profile__button profile__footer profile__footer_out"
            onClick={props.onSignOut}
          >
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </>
  );
}
