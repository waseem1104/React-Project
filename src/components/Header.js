import React from "react";

function Header (){

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a href="/Weather" className="nav-link">Météo</a>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Header;