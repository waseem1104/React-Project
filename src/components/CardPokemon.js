import React from "react";

export default function CardPokemon({dataCard,setPokedex, pokedex}) {


    // Permet de mettre un pokémon dans mon pokédex au moment du click
    const handleClick = (img,name,key,type) =>{

        let newPokemon =  { key : key, img: img,name :name, type : type};
        let newPokedex = pokedex.slice();
        newPokedex.push(newPokemon);
        setPokedex(newPokedex);

    };

    //Permet de vérifier si mon pokémon existe déjà dans mon pokédex.
    const checkPokedex = (name) =>{

        let newPokedex = pokedex.slice();
        let newArray = newPokedex.filter( word => word.name === name);
        return newArray.length > 0;

    };

    if (!dataCard.types) {
        return <></>
    }

    return (
        <>
            <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <h3>{dataCard.name}</h3>
                            <img src={dataCard.sprites?.front_default} />
                            <h5 className="card-title">{dataCard.types[0].type.name}</h5>
                            { !checkPokedex(dataCard.name) ?
                            <button onClick={ () => handleClick(dataCard.sprites?.front_default,dataCard.name, "pokemon"+dataCard.name, dataCard.types[0].type.name) } className="btn btn-danger">Attraper</button>
                            : <p>Pokemon capturé </p> }
                                </div>
                    </div>
            </div>
        </>

    );

}