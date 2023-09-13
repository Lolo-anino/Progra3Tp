import React, {Component} from "react";
import "../../App.css";
import loadGif from "../../loadGif.gif";
class Todas extends Component{
componentDidMount(){
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart`)
.then(response => response.json() )
.then(data => this.setState({
    musicInfo: data})
    )
}

    render(){
        return(
            <div>
                <h1 className="main-title">Ver todas</h1>

            </div>
        )
    }
}


export default Todas