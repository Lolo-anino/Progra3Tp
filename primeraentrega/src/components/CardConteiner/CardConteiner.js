import React, { Component } from "react";


class CardContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            arrayCanciones : [],
        }
    } 
    
     componentDidMount(){
        console.log("Estamos en componentDidMount");
         let urlCanciones = this.props.url 
         fetch(urlCanciones)
            .then(response => response.json())
            .then( data => this.setState({
                arrayCanciones: data.results,
            }))
            .catch(error => console.log(error)) 
      }
      render(){
        return(
            <article className="album">
            {
                this.state.arrayCanciones.map((Obj)=>{
                <h2>{this.props.Obj.name}</h2>
                })
            }
            </article>
        )}

    /* adentro del return de la didmount, para agregar el coso que carge, solamente donde no esta el state 
    (osea donde queremos hacer algo) tenemos que  poner lo que queremos que cargue mientras tanto, osea que 
    todos los cards van a tener un img que carga para el p9 */
}


export default CardContainer