import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__text">
          <div className="about-project__information">
            <h3 className="about-project__information-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__information-description about-project__information-description_left">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__information">
            <h3 className="about-project__information-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__information-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about-project__time">
          <div className="about-project__time-container">
            <span className="about-project__time-title">1 неделя</span>
            <span className="about-project__time-description">Back-end</span>
          </div>
          <div className="about-project__time-container">
            <span className="about-project__time-title about-project__time-title_frontend">4 недели</span>
            <span className="about-project__time-description">Front-end</span>
          </div>
        </div>
      </div>
    </section>
  )
}
