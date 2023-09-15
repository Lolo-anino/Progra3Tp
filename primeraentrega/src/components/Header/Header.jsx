import React from 'react';
import {Link} from "react-router-dom";
import './Header.css'
function Header(props) {
    return (
       
        <header className="cabecera">
             <nav className="barra">
        <Link to="/" ><h2>Home</h2></Link>
        <Link to="/playlist" ><h2>Playlist</h2></Link>

        <Link to="/"><img src="/logo.jpg" alt="" className="logo"/></Link>
        <Link to="/allsongs" ><h2>Todas las canciones</h2></Link>
        <Link to="/allalbums"><h2>Todos los albumes</h2></Link>

        </nav>
            
    </header>
    
  );
  }
  
  export default Header

