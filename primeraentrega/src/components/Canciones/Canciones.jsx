import React, {Component} from "react";
import { Link } from "react-router-dom";

class Canciones extends Component{
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
           <article className="cancion">
           <Link to={`/canciones/${this.props.canciones.id}`}>
            <img src= {this.props.canciones.album.cover_medium} alt="Album cover"/>
            </Link>
            <h2 className="title">{this.props.canciones.title}</h2>
            <p>Artista: {this.props.canciones.artist.name}</p>
            {this.state.verMas ? 
            <section className='ver'>
                <p>Duración: {this.props.canciones.duration}</p>
                <p>Descripcion: Esta cancion es ideal para vos, esperamos que te guste!</p>
                <button onClick={() => this.verMenos()}>Ver menos</button>
                </section>
                :
                <p className='mas' onClick={() => this.verMas()}>Ver mas</p>                  
            }
            <Link to={`/canciones/${this.props.canciones.id}`}>
                <button>Ir a detalle</button>
            </Link>
           </article>
        {/* favorito agregar */}
        </React.Fragment>
        )
    }
}




export default Canciones; 