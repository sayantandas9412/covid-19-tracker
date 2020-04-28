import React from "react";

import Styles from "./Footer.module.css";

const Footer = ({ data: { lastUpdate } }) => {
  const updateDate = new Date(lastUpdate).toString().slice(0, 10);
  return (
    <div className={Styles.container}>
      <span>
        Last Update <strong>{lastUpdate ? updateDate : null}</strong>
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
