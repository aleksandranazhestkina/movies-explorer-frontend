import avatar from "../../images/аватар.jpg";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__profile-container">
          <div className="about-me__profile">
            <h3 className="about-me__name">Александра</h3>
            <p className="about-me__information">Фронтед-разработчик, 25 лет</p>
            <p className="about-me__description">
              Я из Москвы, по профессии я стоматолог. Я замужем. Люблю отдыхать
              на природе, слушать музыку, петь в машине и смотреть вечером
              сериалы. Сейчас я работаю по профессии, но в будущем рассматриваю
              варианты смены сферы деятельности.
            </p>
            <a
              className="about-me__link"
              href="https://github.com/aleksandranazhestkina"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <img className="about-me__foto" src={avatar} alt="Aватар" />
        </div>
      </div>
    </section>
  );
}
