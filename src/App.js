import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Hello World! </h3>
        <Weather city="Paris" />
      </header>
    </div>
  );
}

export default App;
