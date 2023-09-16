import React, { Component } from 'react';
import './MusicDetail.css';
import loadGif from "../../loadGif.gif";
import Footer from '../../components/Footer/Footer';

class MusicDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            musicInfo: [],
            textoBoton: 'Veamos si la cancion esta en favoritos'
        }
    };

    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.props.match.params.id}`)
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
                    textoBoton: 'Lo esta. Click para borrar de favoritos'
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
                textoBoton: 'No lo esta. Click para agregar a favoritos'
            })
        } else {
            favoritos.push(id)
            this.setState({
                textoBoton: 'Lo esta. Click para borrar de favoritos'
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
                    this.state.musicInfo.length === 0 ? 
                    <div className='gif'>
                        <img src={loadGif} alt="wait until the page loads" /> 
                    </div> 
                    :
                    <section>
        
                    <article className='data'>
                   
                        <h2>{this.state.musicInfo.title}</h2>

                        <p> Artista: {this.state.musicInfo.artist.name}</p>

                        <p>Nombre del disco: {this.state.musicInfo.album.title}</p>

                        <img src={this.state.musicInfo.album.cover_medium} alt={this.state.musicInfo.title} />
                        <audio controls>
                            <source src= {this.state.musicInfo.preview}/>
                        </audio>

                        <section className='vermas2'>
                            <p className='trackplay' onClick={()=> this.agregarAFavoritos(this.state.musicInfo.id)}>{this.state.textoBoton}</p> 
                        </section>
                    </article>
                </section>

                }
                <Footer/>
            </div>
        )
    }
}

export default MusicDetail