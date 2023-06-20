import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useFormWithValidation } from "../../hooks/useFormValidation";
import { EMAIL_PATTERN } from "../../utils/constants";

export default function Login(props) {
  const { values, handleChange, isValid, errors } =
    useFormWithValidation();

  function handleLoginSubmit(e) {
    e.preventDefault();
    props.onLogin(values.email, values.password);
  }

  return (
    <section className="login">
      <div className="login__link-container">
        <Link to="/" className="login__link">
          <img className="login__logo" src={logo} alt="Логотип" />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
      </div>
      <form
        className="login__form"
        name="loginForm"
        onSubmit={handleLoginSubmit}
      >
        <span className="login__input-text">E-mail</span>
        <input
          name="email"
          className="login__input"
          type="email"
          placeholder=""
          minLength="2"
          maxLength="30"
          value={values.email || ""}
          pattern={EMAIL_PATTERN}
          required
          onChange={handleChange}
        />
        <span className="login__error">{errors.email}</span>
        <span className="login__input-text">Пароль</span>
        <input
          name="password"
          className={`login__input ${errors.password && "login__error_input"}`}
          type="password"
          placeholder=""
          minLength="2"
          maxLength="30"
          value={values.password || ""}
          required
          onChange={handleChange}
        />
        <span className="login__error">{errors.password}</span>

        <div className="login__buttons">
          {props.errorMessage !== "" && (
            <span className="login__error login__error_button">
              {props.errorMessage}
            </span>
          )}
          <button
            type="submit"
            className={`login__button ${isValid ? "" : "login__button_disabled"}`}
            disabled={!isValid}
          >
            Войти
          </button>
          <span className="login__subtitle">
            Ещё не зарегистрированы?
            <Link to="/signup" className="login__link login__link_signup" onClick={props.onEmptyErrors}>
              Регистрация
            </Link>
          </span>
        </div>
      </form>
    </section>
  );
}
