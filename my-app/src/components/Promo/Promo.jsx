import logo from "../../images/pic__COLOR_landing-logo.svg";
import "./Promo.css";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__cover">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <img src={logo} alt="Логотип" className="promo__logo" />
        </div>
        <ul className="promo__links">
          <li>
            <a
              className="promo__link promo__link_project"
              href="#about-project"
            >
              О проекте
            </a>
          </li>
          <li>
            <a
              className="promo__link"
              href="#techs"
            >
              Технологии
            </a>
          </li>
          <li>
            <a
              className="promo__link"
              href="#about-me"
            >
              Студент
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
