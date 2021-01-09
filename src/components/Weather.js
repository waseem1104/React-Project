import React from "react";
import { useState } from  "react";
import Form from "./Form";
import WeatherAPI from "./WeatherAPI";
import "../App.css"



export default function Weather(){

    let [city,setCity] = useState("");

    return (

        <>
            <div className="headerWeather">
                Météo API
            </div>
            <Form setInput={setCity} nameBtn="Obtenir la météo" placeholder="Paris" />
            <WeatherAPI city={city}/>

        </>
    );



}