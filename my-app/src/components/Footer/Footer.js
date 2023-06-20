import "./Footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__container">
        <p className="footer__copyright">&copy;2023</p>
        <div className="footer__links">
          <a
            className="footer__link"
            href="https://practicum.yandex.ru/"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link"
            href="https://github.com/aleksandranazhestkina"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
}
