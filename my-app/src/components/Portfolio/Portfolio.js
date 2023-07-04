import "./Portfolio.css";
import pointer from "../../images/стрелка.svg"

export default function Portfolio() {
  return (
    <section className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__project">
            <a
              className="portfolio__project-link"
              href="https://github.com/aleksandranazhestkina/how-to-learn"
              target="_blank"
              rel="noreferrer"
            >
              Статичный сайт
              <img className="portfolio__project-img" src={pointer} alt="стрелка" />
            </a>
            
          </li>
          <li className="portfolio__project">
            <a
              className="portfolio__project-link"
              href="https://github.com/aleksandranazhestkina/russian-travel"
              target="_blank"
              rel="noreferrer"
            >
              Адаптивный сайт
              <img className="portfolio__project-img" src={pointer} alt="стрелка" />
            </a>
          </li>
          <li className="portfolio__project">
            <a
              className="portfolio__project-link"
              href="https://github.com/aleksandranazhestkina/react-mesto-api-full"
              target="_blank"
              rel="noreferrer"
            >
              Одностраничное приложение
              <img className="portfolio__project-img" src={pointer} alt="стрелка" />
            </a>
          </li>
        </ul>
    </section>
  );
}
