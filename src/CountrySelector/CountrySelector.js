import React, { useState, useEffect } from "react";
import { fetchAllCountries } from "../api";

import Styles from "./CountrySelector.module.css";

const CountrySelector = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchedApi = async () => {
      const response = await fetchAllCountries();
      setFetchedCountries(response);
    };
    fetchedApi();
  }, []);

  return (
    <div className={Styles.container}>
      <select
        className={Styles.select}
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => {
          return (
            <option key={i} value={country.name}>
              {country.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CountrySelector;
