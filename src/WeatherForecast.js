import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-sm-2">
          <div className="forecast-day">Tue</div>
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max">18°</span>
            <span className="weather-forecast-temperature-min">12°</span>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="forecast-day">Wed</div>
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max">18°</span>
            <span className="weather-forecast-temperature-min">12°</span>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="forecast-day">Thu</div>
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max">18°</span>
            <span className="weather-forecast-temperature-min">12°</span>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="forecast-day">Fri</div>
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max">18°</span>
            <span className="weather-forecast-temperature-min">12°</span>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="forecast-day">Sat</div>
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max">18°</span>
            <span className="weather-forecast-temperature-min">12°</span>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="forecast-day">Sun</div>
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max">18°</span>
            <span className="weather-forecast-temperature-min">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
