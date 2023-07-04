import "./SearchForm.css";
import { useState, useEffect } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import { useLocation } from "react-router-dom";

export default function SearchForm(props) {
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(""); //отображение ошибки
  // const [isErrorDisplaying, setIsErrorDisplaying] = useState(false);
  const location = useLocation();

  function handleChangeValue(e) {
    setSearchValue(e.target.value);
  }
// Сабмит формы
  function handleSubmitForm(e) {
    e.preventDefault();
    if (searchValue.length === 0) {
      setError("Нужно ввести ключевое слово");
    } else {
      setError("");
      if (location.pathname === "/saved-movies") {
        props.getSavedMovies(searchValue);
      } else {
        props.getMovies(searchValue);
        localStorage.setItem("search", searchValue);
      }
    }
  }

  // Заполнение значения инпута из локального хранилища
  useEffect(() => {
    if (location.pathname === "/movies") {
      setSearchValue(localStorage.getItem("search"));
    }
  }, []);

  return (
    <form
      className="search__form"
      name="search"
      noValidate
      onSubmit={handleSubmitForm}
    >
      <div className="search__input-container">
        <input
          className="search__input"
          name="search"
          type="text"
          placeholder="Фильм"
          autoComplete="off"
          minLength="1"
          value={searchValue || ""}
          required
          onChange={handleChangeValue}
        />
        <button className={"search__button"} type="submit"></button>
      </div>
      <span className="search__error">{error}</span>
      <FilterCheckbox
        handleCheckbox={props.handleShortMovies}
        setMoviesCheckbox={props.setMoviesCheckbox}
        moviesCheckbox={props.moviesCheckbox}
      />
    </form>
  );
}
