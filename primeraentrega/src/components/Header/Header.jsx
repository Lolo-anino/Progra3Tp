import React from 'react';
import {Link} from "react-router-dom"

function Header(props) {
    return (
        <header className="cabecera">
        <Link to="/" className="h1"><h1>CUARTETOFY</h1></Link>
        <Link to="/"><img src="/logo.jpg" alt="" className="logo"/></Link>
            <div>
                <form action="./detalles-busqueda.html" method="get" >
                    <input name="buscarr" type="search" placeholder="Buscar" className="buscar"/>
                    <button type="submit" id="btn" className="btn"><i className="fa-solid fa-magnifying-glass"></i></button></form>
            </div>
    </header>
    
  );
  }
  
  export default Header

