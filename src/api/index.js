import axios from "axios";

let url = "https://covid19.mathdro.id/api";
let changeableUrl = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  } else {
    changeableUrl = url;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
