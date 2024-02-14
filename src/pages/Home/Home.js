import React from "react";
import "../../containerHome.css"
import "../../components/Header/header.css"
import logo from "../../assets/placeholder.png";
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div>
            <nav className="bar2">
                <a href="#" className="title2">Popular Titles</a>
            </nav>
            <h1>Hola soy el home</h1>
            <div className="contenedor">
                <div className="fondo">
                    <div className="image">
                        <img src={logo} alt="Imagen 1" />
                        <Link to="/series" className="titulo">SERIES</Link>
                    </div>
                </div>
                <div className="fondo">
                    <div className="image">
                        <img src={logo} alt="Imagen 1" />
                        <Link to="/peliculas" className="titulo">MOVIES</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home; 
