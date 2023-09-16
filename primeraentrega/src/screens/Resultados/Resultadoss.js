import React, {Component} from "react";
import Footer from "../../components/Footer/Footer";
import CardConteiner from "../../components/CardConteiner/CardConteiner";
import "../../App.css";
import loadGif from "../../loadGif.gif";
class Resultados extends Component {
    constructor(props){
        super(props);
        this.state = {
            buscado: this.props.match.params.buscado,
             resultadosTracks: []
        }
    }

componentDidMount(){
 
    
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=track:${this.state.buscado}`)
    .then((response) => response.json())
    .then((datos) =>
    this.setState({
        resultadosTracks: datos.data
    }))
    .catch(e => console.log(e));
}

render(){
    return(
        <>
        
        <section>    
        <h2>Resultados de tu búsqueda: {this.props.match.params.buscado}</h2>
        
        {this.state.resultadosTracks.length >0 ? <CardConteiner info={this.state.resultadosTracks} /> : "No hay ninguna cancion que coincida con tu búsqueda"}
        </section>
    
        <Footer/>
        </>
    );
}

}



export default Resultados