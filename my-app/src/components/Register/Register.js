import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useFormWithValidation } from "../../hooks/useFormValidation";
// import { USER_NAME_PATTERN } from "../../utils/constants";

export default function Register(props) {
  const { values, handleChange, isValid, errors, resetForm } =
    useFormWithValidation();

  function handleRegisterSubmit(e) {
    e.preventDefault();
    props.onRegistration(values.name, values.email, values.password);
    resetForm();
  }

  return (
    <section className="register">
      <div className="register__link-container">
        <Link to="/" className="register__link">
          <img className="register__logo" src={logo} alt="Логотип" />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
      </div>
      <form
        className="register__form"
        name="registerForm"
        noValidate
        onSubmit={handleRegisterSubmit}
      >
        <span className="register__input-text">Имя</span>
        <input
          name="name"
          className="register__input"
          type="text"
          placeholder=""
          minLength="2"
          maxLength="30"
          value={values.name || ""}
          pattern="[a-zA-ZА-яёЁ\-\s]*"
          // pattern={USER_NAME_PATTERN}
          required
          onChange={handleChange}
        />
        <span className="register__error">{errors.name}</span>
        <span className="register__input-text">E-mail</span>
        <input
          name="email"
          className="register__input"
          type="email"
          placeholder=""
          minLength="2"
          maxLength="40"
          value={values.email || ""}
          pattern="^\S+@\S+\.\S+$"
          required
          onChange={handleChange}
        />
        <span className="register__error">{errors.email}</span>
        <span className="register__input-text">Пароль</span>
        <input
          name="password"
          className={`register__input ${
            errors.password && "register__error_input"
          }`}
          type="password"
          placeholder=""
          minLength="2"
          maxLength="30"
          value={values.password || ""}
          required
          onChange={handleChange}
        />
        <span className="register__error">{errors.password}</span>
        <div className="register__buttons">
          {props.errorRegister !== "" && (
            <span className="register__error register__error_button">
              {props.errorRegister}
            </span>
          )}
          <button
            type="submit"
            className={`register__button ${
              !isValid && "register__button_disabled"
            }`}
            disabled={!isValid}
          >
            Зарегистрироваться
          </button>
          <span className="register__support ">
            Уже зарегистрированы?
            <Link to="signin" className="register__link register__link_signin" onClick={props.onEmptyErrors}>
              Войти
            </Link>
          </span>
        </div>
      </form>
    </section>
  );
}
