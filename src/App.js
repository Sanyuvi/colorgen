import { useState } from "react";
import "./App.css";
import Square from "./Square";
import Output from "./Output.js";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexaValue, setHexaValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);
  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        hexaValue={hexaValue}
        isDarkText={isDarkText}
      />
      <Output
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexaValue={setHexaValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
