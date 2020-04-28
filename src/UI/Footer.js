import React from "react";

import Styles from "./Footer.module.css";

const Footer = ({ data: { lastUpdate } }) => {
  return (
    <div className={Styles.container}>
      <span>
        Last Update{" "}
        <strong>{new Date(lastUpdate).toDateString().slice(0, 10)}</strong>
      </span>
      <span className={Styles.dataSource}>
        Data Source :{" "}
        <a href="https://github.com/mathdroid/covid-19-api">
          John Hopkins University
        </a>{" "}
      </span>
      <p className={Styles.des}>
        By{" "}
        <a href="https://github.com/sayantandas9412/covid-19-tracker">
          <strong>Sayantan</strong>
        </a>
      </p>
    </div>
  );
};

export default Footer;
