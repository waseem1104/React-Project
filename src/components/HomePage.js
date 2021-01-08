import React from "react";

export default function Home(){


    return(
        <>
           <h1 className="text-center">APIs</h1>
            <Card nameAPI="Météo API"/>
            <Card nameAPI="API2"/>

        </>
    );

}



function Card({nameAPI}) {
    return (
        <div className="card mt-3">
            <h5 className="card-header">{nameAPI}</h5>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

            </div>
        </div>
    );
}