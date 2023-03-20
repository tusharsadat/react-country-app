import React from "react";
import style from "./country.module.css";

const Country = (props) => {
  const { name, flags, population, area, capital } = props.country;

  const handleRemove = (name) => {
    props.onRemoveCountry(name);
  };
  return (
    <article className={style.country}>
      <div>
        <img className={style.flag} src={flags.png} alt={name.common} />
        <h3>Name: {name.common}</h3>
        <h3>Capital: {capital}</h3>
        <h3>Area: {area}</h3>
        <h3>Population: {population}</h3>
        <button className={style.btn} onClick={() => handleRemove(name.common)}>
          Remove Country
        </button>
      </div>
    </article>
  );
};

export default Country;
