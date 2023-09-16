import React, { Component } from "react";

class DetalleAlbum extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        id : this.props.match.params.id,
        detAlbum: [],
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



    }
    render(){
        console.log('aca' + this.state.detAlbum);
        
        return (
            <>
           
                <h2 className="artistas">{this.state.detAlbum.title}</h2>
                <article className="cajita-canciones">  
                    <img src={this.state.detAlbum.cover_medium}/>  
                    <h3>Artista: {this.state.detAlbum.name}</h3>
                    <h3>se estreno la cancion en {this.state.detAlbum.release_date}</h3>
                    {/* <button id="btn" className="btnVer verIndex" onClick={()=>this.agregarAFavoritos(this.state.detalleCancion.id)} type="button">{ this.state.textoBoton }</button>      
                 */}</article>
            
            </>
          );
    }




}

export default DetalleAlbum; 