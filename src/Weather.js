import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState("");

  function handleResponse(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: response.data.date,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "3a3f0183203cd25f32e5e40604f19192";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          {" "}
          <input
            type="search"
            placeholder="Type a city..."
            className="form-control"
            onChange={updateCity}
            autoFocus="true"
          />
        </div>
        <div className="col-3">
          <button type="Submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="Weather">
        {form}
        <ul>
          <li>{city}</li>
          <li>Temperature{Math.round(weather.temperature)}</li>
          <li>Description{weather.description}</li>
          <li>Humidity{weather.humidity}</li>
          <li>Wind{weather.wind}</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
