import React, {Component} from 'react';
import './Form.css'


class Form extends Component{
    constructor(props){
        super(props)
        this.state={
     
        }
    }
    evitarSubmit(event) {
        event.preventDefault();
        this.props.buscar();
    }       
    render(){
        return(
            <React.Fragment>               
                <form onSubmit={(event)=>this.evitarSubmit(event)}>                 
                <input  onChange={(event)=>this.props.controlarCambios(event)} value={this.props.textSearch} placeholder='Search' />
                <label className='buscar'>Peliculas</label>
                <input onChange={(e)=>this.props.buscar(e)} type="radio" name="buscar" value="movie" />
                <label className='buscar'>Series</label>
                <input onChange={(e)=>this.props.buscar(e)} type="radio" name="buscar" value="tv" />
            
                </form> 
            </React.Fragment>
        )
    }

    }
