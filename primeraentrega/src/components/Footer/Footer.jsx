import React from 'react';
import {Link} from "react-router-dom"

function Footer() {
    return(
<footer>
        <div class="footer">
            <Link to="/"><h3 class="nombre">CUARTETOFY</h3></Link>
        </div>
        <div class="integrantes">
            <p><strong>Integrantes : Cozzo Lorenzo - Roccia Matías - Anino Lorenzo</strong></p>
        </div>
</footer>
);
}

export default Footer