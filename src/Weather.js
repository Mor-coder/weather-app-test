import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
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
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "3a3f0183203cd25f32e5e40604f19192";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container-fluid">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-9">
                    {" "}
                    <input
                      type="search"
                      placeholder="Type a city..."
                      className="form-control"
                      autoFocus="on"
                      onChange={handleCityChange}
                    />
                  </div>
                  <div className="col-3">
                    <button type="Submit" className="btn btn-primary">
                      Search
                    </button>
                  </div>
                </div>
              </form>
              <WeatherInfo data={weatherData} />
            </div>{" "}
            <Footer />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
