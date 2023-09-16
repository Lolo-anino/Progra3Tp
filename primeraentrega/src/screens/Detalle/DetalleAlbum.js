import React, { Component } from "react";

class DetalleAlbum extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        id : this.props.match.params.id,
        detAlbum: [],
        textoBoton: 'Agregar a favoritos'
      };
    }
    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.props.match.params.id}`)
        .then(res => res.json()).then(data => {
            console.log('lo que trae!!!!' + data)
            this.setState({
                detAlbum: data,
            })
        })
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
        console.log('aca' + this.state.detAlbum);
        
        return (
            <>
                
                <h2 className="artistas">{this.state.detAlbum.title}</h2>
                <article className="cajita-canciones">  
                    <img src={this.state.detAlbum.cover_medium}/>  
                    <h3>Artista: {this.state.detAlbum.name}</h3>
                    <h3>Release date: {this.state.detAlbum.release_date}</h3>   
                </article>
                <section className='vermas2'>
                    <p className='trackplay' onClick={()=> this.agregarAFavoritos(this.state.detAlbum.id)}>{this.state.textoBoton}</p> 
                </section>
            
            </>
          );
    }




}

export default DetalleAlbum;    