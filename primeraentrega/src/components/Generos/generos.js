import React from "react";

function generos(props){
    return(
        <div className="character-card">
          <img src={props.photo} alt="" />
          <h4>{props.name}</h4>
          <p>{props.description}</p>
          <a href="#">Ver más</a>
      </div>
    )
}

export default generos