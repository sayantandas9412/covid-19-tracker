import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";

import { fetchDailyData } from "../api";
import Styles from "./Charts.module.css";

const Charts = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchedDailyData = async () => {
      const response = await fetchDailyData();
      setDailyData(response);
    };
    fetchedDailyData();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ reportDate }) => reportDate),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed.total),
            label: "Infected",
            borderColor: "#569ada",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths.total),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = data.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["#569ada", "#3fbe47fa", "#e45b5b"],
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current State in ${country}` },
      }}
    />
  ) : null;

  return (
    <div className={Styles.container}>{country ? barChart : lineChart}</div>
  );
};

export default Charts;
