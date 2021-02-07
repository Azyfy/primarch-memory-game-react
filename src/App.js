import Primarchs from "./components/Primarchs";
import "./styles/reset.css";
import "./styles/App.css";

function App() {
 
  return (
    <div className="App">
      <header> 
        <p id="warhammer"> Warhammer 40k </p>
        <h1> Primarchs </h1>
        <div> Memory Game  <div className="tooltip">&#9432;
          <span className="tooltiptext"> Score by clicking each time on a different primarch. </span></div> 
        </div>
      </header>

      <Primarchs></Primarchs>
    </div>
  );
}

export default App;
