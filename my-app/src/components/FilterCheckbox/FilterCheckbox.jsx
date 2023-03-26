import "./FilterCheckbox.css";
import React from "react";

export default function FilterCheckbox() {

  return (
    <div className="filter__checkbox-container">
      <input
        className={`filter__checkbox ${shortMovies ? "filter__checkbox_on" : ""}`}
        type="checkbox"
      />
      <p className="filter__text">Короткометражки</p>
    </div>
  );
}
