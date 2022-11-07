import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";
import FormattedDate from "./FormattedDate";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container-fluid">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <form>
                <div className="row">
                  <div className="col-9">
                    {" "}
                    <input
                      type="search"
                      placeholder="Type a city..."
                      className="form-control"
                      autoFocus="on"
                    />
                  </div>
                  <div className="col-3">
                    <button type="Submit" className="btn btn-primary">
                      Search
                    </button>
                  </div>
                </div>
              </form>
              <h2>{weatherData.city}</h2>
              <ul>
                <li>
                  <FormattedDate date={weatherData.date} />
                </li>
                <li className="text-capitalize">{weatherData.description}</li>
              </ul>
              <div className="row">
                <div className="col-sm-6">
                  <div className="clearfix weather-temperature">
                    <img
                      src={weatherData.icon}
                      alt={weatherData.description}
                      className="float-left"
                    />
                    <strong>{Math.round(weatherData.temperature)}</strong>
                    <span className="units">
                      <a href="/">°C</a> | <a href="/">°F</a>
                    </span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <ul>
                    <li>Humidity: {weatherData.humidity}%</li>
                    <li>Wind: {weatherData.wind} km/h</li>
                  </ul>
                </div>
              </div>
              <WeatherForecast />
            </div>{" "}
            <Footer />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "3a3f0183203cd25f32e5e40604f19192";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
