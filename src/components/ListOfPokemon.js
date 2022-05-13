import React, { useState, useEffect } from "react";
import axios from "axios";

const ListOfPokemon = (props) => {
  //console.log(props);
  //   const workingSetAllPokemon = (allPokemon) => {
  //     // props.setAllPokemon(allPokemon);
  //     console.log(allPokemon);
  //   };

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=898")
      //   .then((response) => {
      //     workingSetAllPokemon(response.data);
      //   });
      .then((response) => {
        //console.log(response.data.results);
        props.setAllPokemon([...response.data.results]);
      });
  }, []);
  console.log(props.allPokemon);
  return (
    <div>
      <button onClick={() => props.setBool((prev) => !prev)}>
        Fetch All Pokemon
      </button>
      <ul>
        {props.bool &&
          props.allPokemon.map((pokemon, i) => <li key={i}>{pokemon.name}</li>)}
      </ul>
    </div>
  );
};

export default ListOfPokemon;
