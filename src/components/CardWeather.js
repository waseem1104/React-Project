import React from "react";


export default function CardWeather({dataCard}) {

    const ERRORMSG = "PAYS / VILLE INTROUVABLE";

    let getTempCelsius = (temp) => {
        return Math.round(temp - 273.15);
    };

    return (

        <>
            <div className="col-md-5">
            {   dataCard.cod === 200 ?

                <div className="card text-center">
                    <div className="card-body">
                        <h1 className="card-title">{dataCard.name}</h1>
                        <h2>{getTempCelsius(dataCard.main.temp)} °</h2>

                        <img src={`http://openweathermap.org/img/wn/${dataCard.weather[0].icon}@2x.png`} />

                        <div className="mt-5 d-flex justify-content-between">
                            <h3>Min : {getTempCelsius(dataCard.main.temp_min)} °</h3>
                            <h3>Max : {getTempCelsius(dataCard.main.temp_max)} °</h3>
                        </div>
                        <hr/>
                        <div className="mt-5">
                            <h5 className="fs-1">{dataCard.weather[0].description}</h5>
                        </div>

                    </div>
                </div>

                : <h1 className="text-center">{ERRORMSG}</h1>

            }
            </div>
        </>

    );

}