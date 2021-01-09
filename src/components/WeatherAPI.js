import React from "react";
import { useState, useEffect } from  "react";
import CardWeather from "./CardWeather";


export default function WeatherAPI({city,weather,setWeather}){

    const APIKEY = '46c2f66733a9738b77012c49ad8f168d';


    useEffect(() => {

        let lastCalled = true;

        const fetchData = () => {

            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
                .then((response) => response.json())
                .then((data) => lastCalled && setWeather(data))
                .catch((e) => console.error(e));

        };

         fetchData();

        return () => {
            lastCalled = false;
        };

    },[city]);

    return (
        <>
            <div className="d-flex justify-content-center">
                <CardWeather dataCard={weather}/>
            </div>
        </>

    );

}