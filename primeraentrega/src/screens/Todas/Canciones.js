import React, {Component} from "react";
import "../../App.css";
import CardConteiner from "../../components/CardConteiner/CardConteiner";
import Form from "../../components/Form/Form";

class Todas extends Component{
    constructor(props){
        super(props);
        this.state = {
            canciones: [],
            paginas: []
           
        };
    }
    agregarCanciones(){
        fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks")
        .then((response)=> response.json() )
        .then((datos)=>
        this.setState({
            canciones: datos.data,
            paginas: this.state.paginas + 1
        })
    )
    .catch(error => console.log(error));
    }
    componentDidMount(){
        this.agregarCanciones()
    }

render(){
    return(
        <>
        <Form/>
        <h2 className="h2artistas">Todas las Canciones</h2>
        <button onClick={this.agregarCanciones()}>Cargar mas</button>
        <CardConteiner info = {this.state.canciones} />
        
        </>
    )
}

}


export default Todas