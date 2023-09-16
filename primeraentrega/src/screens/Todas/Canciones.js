import React, {Component} from "react";
import "../../App.css";
import loadGif from "../../loadGif.gif";
import CardConteiner from "../../components/CardConteiner/CardConteiner";
import Form from "../../components/Form/Form";

class Todas extends Component{
    constructor(){
        super();
        this.state = {
            canciones: [],
           
        };
    }
    
    componentDidMount(){
        fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks")
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
        <h2 className="h2artistas">Todas las Canciones</h2>
        <CardConteiner info = {this.state.canciones} esAlbum={false}/>
        
        </>
    )
}

}


export default Todas