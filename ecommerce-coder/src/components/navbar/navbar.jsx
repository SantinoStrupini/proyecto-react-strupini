import React from 'react';
import CartWidget from "../cartwidget/Cartwidget";
import './Navbar.css';
import { Link } from "react-router-dom";


const Navbar = ()=>{
    return(
        <div className="navBar">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Basics NR</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/productos">Productos</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/contacto">Contacto</Link>
                        </li>
                        
                    </ul>
                    </div>
                </div>
            </nav>
            <CartWidget/>
        </div>
    )
}

export default Navbar