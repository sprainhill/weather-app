import React from "react";

const WeatherAlerts = props => {
  const {
    alert: {
      properties: { headline, event, description, effective, expires }
    }
  } = props;
  return (
    <div className="alert-card">
      <div>{headline}</div>
      <div>{event}</div>
      <div>{description}</div>
      <div>{effective}</div>
      <div>{expires}</div>
    </div>
  );
};

export default WeatherAlerts;
