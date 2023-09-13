import React, { Component } from 'react';
import './MusicDetail.css';
import loadGif from "../../loadGif.gif";

class MusicDetail extends Component{
    constructor(props){
        super();
        this.state = {
            musicInfo: [],
            textoBoton: 'Agregar a favoritos'
        }
    };

    componentDidMount(){
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${this.props.id}`)
        .then( response => response.json() )
        .then( data => this.setState({
            musicInfo: data},
            () => console.log(data)))

        .catch( error =>
            console.log('El error fue: ' + error))

        let favoritos = []
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null) {
                
            let storageToArray = JSON.parse(recuperoStorage)
            favoritos = storageToArray
            
            console.log(favoritos);
            if(favoritos.includes(this.state.id)) {
                this.setState({
                    textoBoton: 'Borrar de favoritos'
                })
            }
        }
    }

    agregarAFavoritos(id) {
        let favoritos = []
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null) {

            favoritos = JSON.parse(recuperoStorage)
        }

        if(favoritos.includes(id)) {
            favoritos = favoritos.filter(unID => unID !== id)
            this.setState({
                textoBoton: 'Agreagar a favorito'
            })
        } else {
            favoritos.push(id)
            this.setState({
                textoBoton: 'Borrar de favoritos'
            })
        }

        let favsAString = JSON.stringify(favoritos)
        localStorage.setItem('favoritos', favsAString)

        console.log(localStorage);
    }

    
    render(){
        return(
            <div>
                <h1 className="main-title">Music detail</h1>

                {
                    this.state.musicInfo.data.length === 0 ? 
                    <div className='gif'>
                        <img src={loadGif} alt="wait until the page loads" /> 
                    </div> 
                    :
                    <section>
                    
                    <article className='data'>
                    <iframe title="deezer-widget" className="ifram" src="https://widget.deezer.com/widget/dark/track/{this.state.musicInfo.id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
                        <h2>{this.state.musicInfo.title}</h2>

                        <p> Artista: {this.state.musicInfo.artist}</p>

                        <p>Nombre del disco: {this.state.musicInfo.album.title}</p>

                        <img>{this.state.musicInfo.album.cover_medium}</img>

                        <section className='vermas2'>
                            <p className='trackplay' onClick={()=> this.agregarAFavoritos(this.state.musicInfo.id)}>{this.state.textoBoton}</p> 
                        </section>
                    </article>
                </section>

                }
            </div>
        )
    }
}

export default MusicDetail