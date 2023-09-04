import React from 'react';

function App() {
    return (
        <header class="cabecera">
        <link to="index.html" class="h1"><h1>CUARTETOFY</h1></link>
        <link to="index.html"><img src="./img/logo.jpg" alt="" class="logo"/></link>
            <div>
                <form action="./detalles-busqueda.html" method="get">
                    <input name="buscarr" type="search" placeholder="Buscar" class="buscar"/>
                    <button type="submit" id="btn" class="btn"><i class="fa-solid fa-magnifying-glass"></i></button></form>
            </div>
    </header>
  );
  }
  
  export default App

