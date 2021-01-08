import React from "react";


export default function CardWeather({dataCard}) {

    const ERRORMSG = "PAYS / VILLE INTROUVABLE";

    let getTempCelsius = (temp) => {
        return Math.round(temp - 273.15);
    }

    return (

        <>
            {dataCard.cod === 200 ?

            <div className="card text-center">
                <div className="card-body">
                    <h1 className="card-title">{dataCard.name}</h1>
                    <h3>{getTempCelsius(dataCard.main.temp)} °</h3>

                    <img src={`http://openweathermap.org/img/wn/${dataCard.weather[0].icon}@2x.png`} />

                    <div className="mt-5">
                        <h6>Min : {getTempCelsius(dataCard.main.temp_min)} °</h6>
                        <h6>Max : {getTempCelsius(dataCard.main.temp_max)} °</h6>
                    </div>



                </div>

            </div>
                : <h1 className="text-center">{ERRORMSG}</h1>}
        </>

    );

}