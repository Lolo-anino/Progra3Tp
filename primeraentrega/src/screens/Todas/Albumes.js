import React, {Component} from "react";
import "../../App.css";
import loadGif from "../../loadGif.gif";
import CardConteiner from "../../components/CardConteiner/CardConteiner";
import Form from "../../components/Form/Form";

class Todos extends Component{
    constructor(){
        super();
        this.state = {
           
            albumes: []
        };
    }
    
    componentDidMount(){
        fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums")
        .then((response)=> response.json() )
        .then((datos)=>
        this.setState({
            canciones: datos.data
    }))
    .catch(error => console.log(error));
    

}

render(){
    return(
        <>
        <Form/>
        
        <h2 className="h2artistas">Todos los albumes</h2>
         <CardConteiner info = {this.state.albumes} esAlbum={true}/> 
        </>
    )
}

}


export default Todos