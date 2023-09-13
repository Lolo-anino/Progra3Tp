import React, { Component } from 'react';
import CardContainer from '../CardConteiner/CardConteiner';

class Index extends Component{
    render(){
        return(
        <nav>
            <img src="./img/banner.jpg" alt="" class="banner"></img>
            <main class="cantantes">
                <h2>Canciones</h2>
                <CardContainer url="https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart"/>
                </main>
                <main class="cantantes">
                <h2>Generos</h2>
                <CardContainer url="https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart"/>
            </main>
        </nav>
    )}
}

export default Index