import React, { Component } from 'react';
import Canciones from "../Canciones/Canciones";
import Card from "../Card/Card";
import Albumes from "../Albumes/Albumes";
import Index from '../Index/Index';

class CardContainer extends Component {

    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }   

    render(){
        return(
            <article className="album">
            {
                this.state.arrayCancion.map((cancion, i)=>{
                    <Card key={cancion}/>
                })
            }
            {
                /* this.state.arrayAlbum.map((album, i)=>{
                    <Card key={album}/>
                }) */
            }
            </article>
        )}

    /* adentro del return de la didmount, para agregar el coso que carge, solamente donde no esta el state 
    (osea donde queremos hacer algo) tenemos que  poner lo que queremos que cargue mientras tanto, osea que 
    todos los cards van a tener un img que carga para el p9 */
}
export default CardContainer;


