import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';

class Card extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
          <article className="cantantes">
            <img src={this.props.cover_medium}/>
              <p>{this.props.title}</p>
            </article>
    )}

}



export default Card
