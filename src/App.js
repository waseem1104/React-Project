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
                <PokeWeather pokedex={pokedex} weather={weather}/>
          </Route>

      </>



  );
}


export default App;
