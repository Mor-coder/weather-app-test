import React, { useState } from "react";

export default function WeatherDegree(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFarhenheit(event) {
    event.preventDefault();
    setUnit("farhenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherDegree">
        <strong>{Math.round(props.celsius)}</strong>
        <span className="units">
          <a href="/">°C</a> |{" "}
          <a href="/" onClick={convertToFarhenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let farhrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="WeatherDegree">
        <strong>{Math.round(farhrenheit)}</strong>
        <span className="units">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
