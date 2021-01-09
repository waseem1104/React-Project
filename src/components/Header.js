import React from "react";
import Link from "./Link";

function Header (){

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/" className="nav-link">Accueil</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/Weather" className="nav-link">Météo</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/Pokemon" className="nav-link">Pokémon</Link>
                    </li>

                    <li className="nav-item">
                        <Link href="/Pokedex" className="nav-link">Mon Pokédex</Link>
                    </li>

                    <li className="nav-item">
                        <Link href="/WeatherPokemon" className="nav-link">PokéMétéo</Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Header;