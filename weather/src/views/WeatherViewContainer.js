import React, { Component } from "react";
import { connect } from "react-redux";
import { getAlerts } from "../actions";

// Components
import WeatherAlerts from "../components/WeatherAlerts";

class WeatherViewContainer extends Component {
  componentDidMount() {
    console.log("CDM phasers locked");
    this.props.getAlerts();
  }

  render() {
    return (
      <div className="weather-container">
        <h2>Weather App incoming</h2>
        {/* <WeatherAlerts /> */}
      </div>
    );
  }
}

export default connect(
  null,
  { getAlerts }
)(WeatherViewContainer);
