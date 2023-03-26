import "./SearchForm.css";
import { useState, useEffect } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.jsx";
import { useFormWithValidation } from "../../hooks/useFormValidation";

export default function SearchForm() {
  return (
    <form className="search__form" name="search" noValidate>
      <div className="search__input-container">
        <input
          className="search__input"
          name="searchtext"
          type="text"
          placeholder="Фильм"
          autoComplete="off"
          value={values.search}
          required
        />
        <button className="search__button" type="submit"></button>
      </div>
      <span className="search__error">{error}</span>
      <FilterCheckbox />
    </form>
  );
}
