import React from "react";
import { useState, useEffect } from  "react";
import CardPokemon from "./CardPokemon";


export default function PokemonAPI({pokemon,setPokedex,pokedex}) {

    let [pokemonData,setPokemonData] = useState({});


    useEffect(() => {

        let lastCalled = true;

        const fetchData =  () => {

             fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                .then((response) => response.json())
                .then((data) => lastCalled && setPokemonData(data))
                .catch((e) => console.error(e));

        };

        fetchData();


        return () => {
            lastCalled = false;

        };

    },[pokemon]);


    return(

        <>
            <div className="d-flex justify-content-center">
                 <CardPokemon dataCard={pokemonData} setPokedex={setPokedex} pokedex={pokedex} />
            </div>
        </>


    );


}