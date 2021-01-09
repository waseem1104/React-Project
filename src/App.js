import logo from './logo.svg';
import React, {useState} from "react"
import Header from "./components/Header"
import Route from "./components/Route"
import Weather from "./components/Weather"
import HomePage from "./components/HomePage"
import Pokemon from "./components/Pokemon"
import DisplayPokedex from "./components/DisplayPokedex";
import './App.css';



function App() {

    let [pokedex,setPokedex] = useState([]);

  return (

      <>
          <Header/>
          <Route path="/">
              <HomePage/>
          </Route>

          <Route path="/Weather">
            <Weather/>
          </Route>

          <Route path="/Pokemon">
            <Pokemon setPokedex={setPokedex} pokedex={pokedex}/>
          </Route>

          <Route path="/Pokedex">

              <div className="headerPokemon">
                  POKEDEX
              </div>
              <DisplayPokedex pokedex={pokedex} setPokedex={setPokedex}/>

          </Route>

      </>



  );
}


export default App;
