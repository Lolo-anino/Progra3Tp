import React, { Component } from "react";
import CardConteiner from "../../components/CardConteiner/CardConteiner";

class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Albumesfavs: [],
            Cancionesfavs: [],
            
        };
    }

    componentDidMount() {
        let recuperoStorage = localStorage.getItem('favoritos');
        let cancionesfavs = JSON.parse(recuperoStorage);
        if (cancionesfavs === null) {
            cancionesfavs = [];
        }
        cancionesfavs.map((id) => {
            fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    this.setState({
                        Cancionesfavs: this.state.Cancionesfavs.concat(data)``
                    });
                })
                .catch((e) => console.log(e));
        });
    }

    render() {
        return (
            <>
                <h1>Playlist</h1>
                <section>
                    <p>Tracks favoritos</p>
                    {this.state.Cancionesfavs.length === 0 ? "No hay canciones en la playlist" : <CardConteiner info={this.state.Cancionesfavs} />}
                </section>
            </>
        );
    }
}

export default Playlist;
