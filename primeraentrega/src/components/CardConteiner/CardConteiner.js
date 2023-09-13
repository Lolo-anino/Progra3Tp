import React, { Component } from "react";
import Card from "../Card/Card";

class CardsContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            arrayDePelis : [],
        }
    }

    /* adentro del return de la didmount, para agregar el coso que carge, solamente donde no esta el state 
    (osea donde queremos hacer algo) tenemos que  poner lo que queremos que cargue mientras tanto, osea que 
    todos los cards van a tener un img que carga para el p9 */
}