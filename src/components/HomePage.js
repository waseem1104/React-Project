import React from "react";

export default function Home(){


    return(
        <>

            <div className="container-fluid pt-3">
               <h1 className="text-center">APIs utilisées </h1>
                <Card nameAPI="Météo API"
                      link="https://openweathermap.org/current"
                      description="Une API permettant d'obtenir la météo d'un lieu."
                      use="Il suffit de rentrer le nom d'un lieu et vous obtiendrez la météo de ce lieu !"


                />
                <Card nameAPI="PokéAPI"
                      link="https://pokeapi.co/"
                      description="Une API permettant d'obtenir les informations des pokémons ! (Attention, les informations sont en anglais.)"
                      use="À vous de chercher un pokémon (en anglais) et de l'attraper ! Une fois attrapé, il est à vous, dans votre Pokédex ! Vous avez la possibilité de le relâcher."
                />

                <Card nameAPI="PokéAPI & Météo API (Fusion des 2 APIs)"
                      link="https://pokeapi.co/ & https://openweathermap.org/current"
                      description="Fusion des 2 APIs"
                      use="Comment ça marche ? Il vous faut d'abord rechercher un lieu afin d'obtenir la météo. Par la suite, vous devrez attraper des pokémons. Les types de pokémon uniquement attrapés (dans votre Pokédex) s'afficheront en fonction de la température du lieu. Exemple : Vous avez recherché Paris comme lieu et la témperature est < 0°. Uniquement les pokémons de type ice que vous avez capturé s'afficheront. "
                />


            </div>

        </>
    );

}



function Card({nameAPI,link,description,use}) {
    return (
        <div className="card mt-3">
            <h5 className="card-header">{nameAPI}</h5>
            <div className="card-body">
                <h5 className="card-title">Lien : {link}</h5>
                <p className="card-text">Description : {description} </p>
                <p className="card-text">Utilisation au sein du projet : {use} </p>

            </div>
        </div>
    );
}