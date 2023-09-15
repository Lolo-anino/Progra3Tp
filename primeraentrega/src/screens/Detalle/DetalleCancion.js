import React, { Component } from "react";

class DetalleCancion extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        id : this.props.match.params.id,
        detCancion: [],
      };
    }
    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.props.match.params.id}`)
        .then(res => res.json()).then(data => {
            console.log('lo que trae!!!!' + data)
            this.setState({
                detCancion: data,
            })

        })



    }
    render(){
        console.log('aca' + this.state.detCancion.album);
        
        return (
            <>
           
                <h2 className="artistas">{this.state.detCancion.title}</h2>
                <article className="cajita-canciones">
                    <img src={`https://e-cdn-images.dzcdn.net/images/cover/${this.state.detCancion.md5_image}/264x264-000000-80-0-0.jpg`} alt="Portada del Album"/>
                    <h3 alt="no tiene nombre">Artista: {this.state.detCancion.name}</h3>
                    <h3>Pertenece al album: {this.state.detCancion.title}</h3>
                    <h3>se estreno la cancion en {this.state.detCancion.release_date}</h3>
                    <div className="detalle">
                        <iframe className="detalle" src={this.state.detCancion.preview} />
                    </div>
                    {/* <button id="btn" className="btnVer verIndex" onClick={()=>this.agregarAFavoritos(this.state.detalleCancion.id)} type="button">{ this.state.textoBoton }</button>      
                 */}</article>
            
            </>
          );
    }




}

export default DetalleCancion; 