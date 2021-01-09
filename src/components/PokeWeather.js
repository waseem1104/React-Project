import React, {useState} from "react";
import "../App.css"
import CardWeather from "./CardWeather";


export default function PokeWeather({pokedex,weather}) {


    let getTempCelsius = () => {

            let getTemp = weather.main.temp;
            return Math.round(getTemp - 273.15);

    };

   let getTypePokemon = () => {

       let getTempCelcius = getTempCelsius();

       if (getTempCelcius < 0 ){
           return "ice";
       }
       if (getTempCelcius >= 0 && getTempCelcius <= 10){
           return "water";
       }
       if (getTempCelcius > 10 && getTempCelcius <= 25){
           return "normal";
       }
       if (getTempCelcius > 25){
           return "fire";
       }

   };

   let getPokemon = () => {

       let getType = getTypePokemon();
       let newPokedex = pokedex.slice();
       let getPokemonTemp = newPokedex.filter( word => word.type === getType);

       return getPokemonTemp;
   };


   if (weather.cod === 200) {

       return (

           <>
               <div className="headerPokemon">
                   POKEWEATHER
               </div>

               <div className="container-fluid pt-5">

                   <div className="row">

                       <div className="col-md-6">
                           <CardWeather dataCard={weather}/>
                       </div>

                       <div className="col-md-6">
                           <DisplayPokedex pokemons={getPokemon()}/>
                       </div>

                   </div>

               </div>
           </>

       );

   }else{
       return <></>;
   }
}

function DisplayPokedex({pokemons}) {

    return (

            <div className="container-fluid pt-2">
                <div className="row">
                    {pokemons.map( pokemon =>
                        <div className="col-md-4" key={pokemon.key}>
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">{pokemon.name}</h5>
                                    <img src={pokemon.img} />

                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
    );
}