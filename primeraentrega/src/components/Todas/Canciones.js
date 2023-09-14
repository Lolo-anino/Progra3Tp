import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import loadGif from "../../loadGif.gif";
class Todas extends Component{
    constructor(props){
        super(props);
        this.state = {
        musicInfo : []
        }
    }
  componentDidMount(){
  fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart`)
  .then(response => response.json() )
  .then(data => this.setState({
      musicInfo: data.tracks.data})
      )
  };

  
  

    render(){
        return(
            <div>
                <h1 className="main-title">Ver todas</h1>
                {this.state.musicInfo.map((cancion) => (
                    <li key={cancion.id}>{cancion.title}</li>
                ))}
                
            </div>
        )
    }
}


export default Todas