import React, { Component } from "react";
import Cards from "./Cards/Cards";
import Charts from "./Charts/Charts";
import CountrySelector from "./CountrySelector/CountrySelector";
import CoronaImage from "./images/image.png";
import Footer from "./UI/Footer";

import Styles from "./App.module.css";

import { fetchData } from "./api";

class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={Styles.container}>
        <img src={CoronaImage} alt="COVID-19" className={Styles.image} />
        <Cards data={data} />
        <CountrySelector handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
        <Footer data={data} />
      </div>
    );
  }
}

export default App;
