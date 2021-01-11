import React from "react";


export default function DisplayPokedex({pokedex, setPokedex}) {


    // Permet de relâcher un pokémon de mon pokédex
    const handleDelete = (name) =>{

       let newPokedex = pokedex.slice();
       let index = newPokedex.findIndex(pokemon => pokemon.name == name);
       newPokedex.splice(index,1);

       setPokedex(newPokedex);

    };

    return(
        <>
        <div className="headerPokemon">
            POKEDEX
        </div>

        <div className="container-fluid pt-2">
            <div className="row">
                {pokedex.map( pokemon =>
                        <div className="col-md-3" key={pokemon.key}>
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">{pokemon.name}</h5>
                                    <img src={pokemon.img} />
                                    <div>
                                    <button onClick={() => handleDelete(pokemon.name)} className="btn btn-danger">Relacher</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                )}
            </div>
        </div>
        </>
    );
}