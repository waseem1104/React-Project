import React from "react";
import { useState } from  "react";
import Form from "./Form";
import WeatherAPI from "./WeatherAPI";



export default function Weather(){

    let [city,setCity] = useState("");

    return (

        <>

            <Form setCity={setCity} />
            <WeatherAPI city={city}/>


        </>

    );



}