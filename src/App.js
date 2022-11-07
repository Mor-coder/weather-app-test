import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Paris" />
    </div>
  );
}

export default App;
