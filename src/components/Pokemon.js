import React from "react";
import { useState } from  "react";
import "../App.css"
import Form from "./Form";
import PokemonAPI from "./PokemonAPI";


export default function Pokemon({setPokedex,pokedex}){



    let [pokemon,setPokemon] = useState("");

    return (

        <>
            <div className="headerPokemon">
                POKEMON API
            </div>

            <Form setInput={setPokemon}
                  nameBtn="Obtenir mon Pokémon"
                  placeholder="Pikachu"
            />

            <PokemonAPI pokemon={pokemon} setPokedex={setPokedex} pokedex={pokedex}/>


        </>
    );
}