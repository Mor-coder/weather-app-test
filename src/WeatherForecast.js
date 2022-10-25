import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactAnimatedWeather from "react-animated-weather/build/ReactAnimatedWeather";

import "./App.css";

export default function WeatherForecast() {
  const defaults = {
    icon: "CLEAR_DAY",
    color: "BLACK",
    size: 34,
    animate: true,
  };

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-sm-2">
          <div className="forecast-day">Tue</div>
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max">18°</span>
            <span className="weather-forecast-temperature-min">12°</span>
            <ReactAnimatedWeather
              icon="PARTLY_CLOUDY_DAY"
              color={defaults.color}
              size={defaults.size}
              animate={defaults.animate}
            />
          </div>
        </div>
        <div className="col-sm-2">
          <div className="forecast-day">Wed</div>
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max">18°</span>
            <span className="weather-forecast-temperature-min">12°</span>
            <ReactAnimatedWeather
              icon="PARTLY_CLOUDY_DAY"
              color={defaults.color}
              size={defaults.size}
              animate={defaults.animate}
            />
          </div>
        </div>
        <div className="col-sm-2">
          <div className="forecast-day">Thu</div>
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max">18°</span>
            <span className="weather-forecast-temperature-min">12°</span>
            <ReactAnimatedWeather
              icon="CLOUDY"
              color={defaults.color}
              size={defaults.size}
              animate={defaults.animate}
            />
          </div>
        </div>
        <div className="col-sm-2">
          <div className="forecast-day">Fri</div>
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max">18°</span>
            <span className="weather-forecast-temperature-min">12°</span>
            <ReactAnimatedWeather
              icon="SLEET"
              color={defaults.color}
              size={defaults.size}
              animate={defaults.animate}
            />
          </div>
        </div>
        <div className="col-sm-2">
          <div className="forecast-day">Sat</div>
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max">18°</span>
            <span className="weather-forecast-temperature-min">12°</span>
            <ReactAnimatedWeather
              icon="FOG"
              color={defaults.color}
              size={defaults.size}
              animate={defaults.animate}
            />
          </div>
        </div>
        <div className="col-sm-2">
          <div className="forecast-day">Sun</div>
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max">18°</span>
            <span className="weather-forecast-temperature-min">12°</span>
            <ReactAnimatedWeather
              icon="PARTLY_CLOUDY_DAY"
              color={defaults.color}
              size={defaults.size}
              animate={defaults.animate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
