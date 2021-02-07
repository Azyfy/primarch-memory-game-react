import Primarchs from "./components/Primarchs";
import "./styles/reset.css";
import "./styles/App.css";

function App() {
 
  return (
    <div className="App">
      <header> 
        <p id="warhammer"> Warhammer 40k </p>
        <h1> Primarchs </h1>
        <p> Memory Game </p>
      </header>

      <Primarchs></Primarchs>
    </div>
  );
}

export default App;
