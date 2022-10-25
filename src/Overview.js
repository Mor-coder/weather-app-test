import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactAnimatedWeather from "react-animated-weather/build/ReactAnimatedWeather";

import "./App.css";

export default function Overview() {
  const defaults = {
    icon: "CLEAR_DAY",
    color: "black",
    size: 64,
    animate: true,
  };

  let weatherData = {
    city: "Utrecht",
    temperature: 20,
    date: "Thursday 09:35",
    description: "Sunny",
    humidity: 30,
    wind: 7,
  };

  return (
    <div className="Overview">
      <h2>{weatherData.city}</h2>
      <ul>
        <li>Last updated: {weatherData.date}</li>
        <li>{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-sm-6">
          <div className="clearfix weather-temperature">
            <div className="float-left">
              <ReactAnimatedWeather
                icon={defaults.icon}
                color={defaults.color}
                size={defaults.size}
                animate={defaults.animate}
              />
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>Partly Cloudy</li>
            <li>{weatherData.humidity} %</li>
            <li>{weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
