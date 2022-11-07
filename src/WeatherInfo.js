import React from "react";
import WeatherForecast from "./WeatherForecast";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeaherInfo">
      <div className="Weather">
        <h2>{props.data.city}</h2>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row">
          <div className="col-sm-6">
            <div className="clearfix weather-temperature">
              <div className="float-left">
                <WeatherIcon
                  code={props.data.icon}
                  alt={props.data.description}
                />
                <strong>{Math.round(props.data.temperature)}</strong>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
        <WeatherForecast />
      </div>
    </div>
  );
}
