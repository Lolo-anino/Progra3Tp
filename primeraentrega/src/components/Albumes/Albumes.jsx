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
           <article className="cancion">
           <Link to={`/canciones/${this.props.albumes.id}`}>
            <img src= {this.props.albumes.cover} alt="Album cover"/>
            </Link>
            <h2 className="title">{this.props.albumes.title}</h2>
            <p>Artista: {this.props.albumes.artist.name}</p>
           </article>
        {/* favorito agregar */}
        </React.Fragment>
        )
    }
}




export default Albumes; 