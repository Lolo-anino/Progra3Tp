import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';

class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            arrayCanciones : [],
            arrayAlbums : []

        }
    }
    componentDidMount() {
        let urlCanciones =
        `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?index=0&limit=5`;
        let urlAlbums =
          `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=0&limit=5`;
        fetch(urlCanciones)
          .then((response) => response.json())
          .then((data) =>
            this.setState({
              arrayCanciones: data.results,
            })
          )
          .catch((e) => console.log(e));
        fetch(urlAlbums)
          .then((response) => response.json())
          .then((data) =>
            this.setState({
              arrayAlbum: data.results,
            })
          )
          .catch((e) => console.log(e));
      }
    render(){
        return(
        <div>
            <img src="./img/banner.jpg" alt="" class="banner"></img>
            <main className="cantantes">
                <h2>Canciones</h2>
                <CardContainer arrayCancion={this.state.arrayCanciones} esCacion ={true}/>
                </main>
                <main className="cantantes">
                <h2>Generos</h2>{/* 
                <CardContainer arrayAlbum={this.state.arrayAlbums} esCacion ={false}/> */}
            </main>
        </div>
    )}
}

export default Index