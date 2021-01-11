import React, {useState} from "react"
import Header from "./components/Header"
import Route from "./components/Route"
import Weather from "./components/Weather"
import HomePage from "./components/HomePage"
import Pokemon from "./components/Pokemon"
import DisplayPokedex from "./components/DisplayPokedex";
import PokeWeather from "./components/PokeWeather";
import './App.css';



function App() {

    let [pokedex,setPokedex] = useState([]);
    let [city,setCity] = useState("");
    let [weather,setWeather] = useState("");


  return (

      <>
          <Header/>
          <Route path="/">
              <HomePage/>
          </Route>

          <Route path="/Weather">
            <Weather city={city} setCity={setCity} weather={weather} setWeather={setWeather}/>
          </Route>

          <Route path="/Pokemon">
            <Pokemon setPokedex={setPokedex} pokedex={pokedex}/>
          </Route>

          <Route path="/Pokedex">
              <DisplayPokedex pokedex={pokedex} setPokedex={setPokedex}/>
          </Route>

          <Route path="/WeatherPokemon">

              <div className="headerPokemon">
                  POKEWEATHER
              </div>

             <div className="container-fluid pt-3">

                 <h5>Informations fusion des 2 APIs : </h5>

                 <ul>
                     <li>Température &lsaquo; 0° : Affichage des pokémons attrapés de type ICE </li>
                     <li>Température compris entre 0° et 10° : Affichage des pokémons attrapés de type WATER </li>
                     <li>Température compris entre 11° et 25° : Affichage des pokémons attrapés de type NORMAL </li>
                     <li>Température &rsaquo; 25 ° : Affichage des pokémons attrapés de type FEU </li>
                 </ul>

             </div>
                <PokeWeather pokedex={pokedex} weather={weather}/>
          </Route>

      </>



  );
}


export default App;
