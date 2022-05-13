import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ListOfPokemon from "./components/ListOfPokemon";
function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [bool, setBool] = useState(false);
  return (
    <div className="App">
      <ListOfPokemon
        allPokemon={allPokemon}
        setAllPokemon={setAllPokemon}
        bool={bool}
        setBool={setBool}
      />
    </div>
  );
}

export default App;
