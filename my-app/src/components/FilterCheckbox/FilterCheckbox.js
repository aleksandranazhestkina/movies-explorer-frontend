import "./FilterCheckbox.css";
import React from "react";

export default function FilterCheckbox(props) {
  return (
    <div className="filter__checkbox-container">
      <input
        className={`filter__checkbox ${
          props.moviesCheckbox ? "filter__checkbox_on" : ""
        }`}
        type="checkbox"
        onChange={props.handleCheckbox}
      />
      <p className="filter__text">Короткометражки</p>
    </div>
  );
}
