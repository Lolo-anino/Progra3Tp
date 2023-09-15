import React, {Component} from "react";
import Footer from "../../components/Footer/Footer";
import CardConteiner from "../../components/CardConteiner/CardConteiner";
import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";

class Index extends Component {
    constructor(){
        super();
        this.state = {
            canciones: [],
            albumes: []
        };
    }
    
    componentDidMount(){
        fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?index=0&limit=5")
        .then((response)=> response.json() )
        .then((datos)=>
        this.setState({
            canciones: datos.data
    }))
    .catch(error => console.log(error));
    fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=0&limit=5")
    .then((response)=> response.json())
    .then((datos)=> 
    this.setState({
        albumes: datos.data
    }))
    .catch(error => console.log(error));

}

render(){
    return(
        <>
        <Header/>
        <Form/>
        <h2>Top 5 Canciones</h2>
        <CardConteiner info = {this.state.canciones} esAlbum={false}/>
        <h2>Top 5 Albumes</h2>
        <CardConteiner info = {this.state.albumes} esAlbum={true}/>
        <Footer/>
        </>
    )
}

}

export default Index;