import "./App.css";
import Weather from "./Weather";
import Overview from "./Overview";
import Footer from "./Footer";
import WeatherForecast from "./WeatherForecast";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container-fluid">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <Weather city="Paris" />
              <Overview />
              <WeatherForecast />
            </div>
            <Footer />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
