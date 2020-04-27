import React from "react";
import CountUp from "react-countup";

import Styles from "./Cards.module.css";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={Styles.container}>
      <div className={cx(Styles.card, Styles.card1)}>
        <div className={Styles.confirmed}>
          <h3>
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2}
              separator=","
            />
          </h3>
          <p>Infected</p>
          <p>
            The number of infections as of <br />
            {new Date(lastUpdate).toDateString()}
          </p>
        </div>
      </div>
      <div className={cx(Styles.card, Styles.card2)}>
        <div className={Styles.recovered}>
          <h3>
            <CountUp
              start={0}
              end={recovered.value}
              duration={2.5}
              separator=","
            />
          </h3>
          <p>Recovered</p>
          <p>
            The number of recoveries as of <br />
            {new Date(lastUpdate).toDateString()}
          </p>
        </div>
      </div>

      <div className={cx(Styles.card, Styles.card3)}>
        <div className={Styles.deaths}>
          <h3>
            <CountUp
              start={0}
              end={deaths.value}
              duration={2.5}
              separator=","
            />
          </h3>
          <p>Deaths</p>
          <p>
            The number of deaths as of <br />
            {new Date(lastUpdate).toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
