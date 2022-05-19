import NavBar from "./components/NavBar";
import "./App.css";
import HeroImage from "./components/HeroImage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <h1>Runner's Workout</h1>
        <HeroImage />
      </div>
    </div>
  );
}

export default App;
