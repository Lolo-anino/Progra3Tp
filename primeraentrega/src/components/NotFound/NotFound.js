import React from "react";
import "./NotFound.css";

function NotFound() {
    return(
        <React.Fragment>
        <h4>_404_</h4>
        <div className="centrar">
            <img className="imgFound" src="./img/errorGato.gif"></img>
        </div>
        </React.Fragment>
    );
};
export default NotFound