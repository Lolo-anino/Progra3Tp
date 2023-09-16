import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busqueda: ""
        };
    }

    evitarSubmit(event) {
        event.preventDefault();
       
    }

    controlarCambios = (evento) => {
        this.setState({ busqueda: evento.target.value });
    }
    

    render() {
        return (
            <div>
                <form onSubmit={this.evitarSubmit}>
                    <input
                        type='text'
                        onChange={this.controlarCambios}
                        value={this.state.busqueda}
                        placeholder='Buscar'
                    />
                    <Link to={`/search-result/${this.state.busqueda}`}>
                        <button type="submit">Buscar</button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default Form;
