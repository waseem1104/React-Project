import logo from './logo.svg';
import React from "react"
import Header from "./components/Header"
import Route from "./components/Route"
import Weather from "./components/Weather"
import HomePage from "./components/HomePage"
import './App.css';

function App() {



  return (

      <div className="container-fluid">

          <Header/>
          <Route path="/">
              <HomePage/>
          </Route>

          <Route path="/Weather">
            <Weather/>
          </Route>


      </div>



  );
}


export default App;
