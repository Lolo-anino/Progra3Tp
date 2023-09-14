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
    }      

    controlarCambios(evento){
        this.setState(
            {busqueda: evento.target.value}
        );
    }

    render(){
        return(
            <div>               
                <form onSubmit={(event)=>this.evitarSubmit(event)}>
                    <input type='text' onChange={(event)=>this.props.controlarCambios(event)} value={this.props.busqueda} placeholder='Buscar' />
                    <Link to = {`/search-result/${this.state.busqueda}`}>Buscar</Link>
                </form> 
            </div>
        )
    }

}


export default Form;