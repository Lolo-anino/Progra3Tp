import React, {Component} from "react";
import { Link } from "react-router-dom";

class Albumes extends Component{
    constructor(props){
        super(props);
        this.state = {
            verMas: false
        }
    };
    verMas(){
        this.setState( {verMas: true} )
    }
    verMenos(){
        this.setState({verMas: false} )
    }

    render(){
        return(
        <React.Fragment>
           <article className="contenedor">
           <Link to={`/canciones/${this.props.albumes.id}`}>
            <img src= {this.props.albumes.cover} alt="Album cover"/>
            </Link>
            <h2 className="title">{this.props.albumes.title}</h2>
            <p>Artista: {this.props.albumes.artist.name}</p>
            {this.state.verMas ? 
            <section className='ver'>
                <p>Fecha de lanzamiento: </p>
                <button onClick={() => this.verMenos()}>Ver menos</button>
                </section>
                   :
                <p className='mas' onClick={() => this.verMas()}>Ver mas</p>                  
            }
            <Link to={`/canciones/${this.props.albumes.id}`}>
                <button>Ir a detalle</button>
            </Link>
           </article>
        {/* favorito agregar */}
        </React.Fragment>
        )
    }
}




export default Albumes; 