import React from "react";
import { useEffect, useContext, useState } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { useFormWithValidation } from "../../hooks/useFormValidation";
import CurrentUserContext from "../../context/CurrentUserContext";
import Burger from "../Burger/Burger";
import { EMAIL_PATTERN, USER_NAME_PATTERN } from "../../utils/constants";

export default function Profile() {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Burger />
      <section className="profile">
        <form className="profile__form" name="profile" noValidate>
          <h1 className="profile__hello">{`Привет, ${currentUser.name}!`}</h1>
          <div className="profile__container">
            <span className="profile__error-name">{errors.name}</span>
            <p className="profile__text">
              Имя
              <input
                name="name"
                className="profile__input profile__input_name"
                value={values.name}
                type="text"
                required
                minLength="2"
                maxLength="30"
                pattern={USER_NAME_PATTERN}
              />
            </p>
            <p className="profile__text profile__text_email">
              E-mail
              <input
                name="email"
                className="profile__input"
                value={values.email}
                type="email"
                pattern={EMAIL_PATTERN}
                required
              />
            </p>
            <span className="profile__error-name">{errors.email}</span>
          </div>
          <button
            className={`profile__button profile__footer ${
              !isValid ? "profile__button_disabled" : ""
            }`}
            type="submit"
            disabled={!isValid ? true : false}
          >
            Редактировать
          </button>
          <button
            type="submit"
            className="profile__button profile__footer profile__footer_out"
          >
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </>
  );
}
