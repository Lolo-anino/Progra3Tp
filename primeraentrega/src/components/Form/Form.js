import React, {Component} from 'react';
import './Form.css'


class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            busqueda: ""
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
                <label className='buscar'>Canciones</label>
                <input onChange={(e)=>this.props.buscar(e)} type="radio" name="buscar" value="Cancion" />
                <label className='buscar'>Albumes</label>
                <input onChange={(e)=>this.props.buscar(e)} type="radio" name="buscar" value="" />
            
                </form> 
            </React.Fragment>
        )
    }

}


export default Form;