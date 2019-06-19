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
        {this.props.alerts.map(alert => {
          console.log("WVC map alert", alert);
          return <WeatherAlerts alert={alert} key={alert.id} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("WVC mapStateToProps state", state);
  return {
    alerts: state.alerts,
    fetching: state.fetching
  };
};

export default connect(
  mapStateToProps,
  { getAlerts }
)(WeatherViewContainer);

// headline, event, description, effective (moment) ends (moment)
