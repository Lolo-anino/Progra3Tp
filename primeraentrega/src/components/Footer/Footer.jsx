import React from 'react';
import {Link} from "react-router-dom"

function Footer() {
    return(
<footer>
        <div class="footer">
<<<<<<< HEAD
            <Link to="/"><h3 class="nombre">CUARTETOFY</h3></Link>
=======
            <link to="/"><h3 class="nombre">CUARTETOFY</h3></link>
            <link to="/"><img src="./img/logo.jpg" alt="" class="logo"/></link>
            <link to="instagram.com"><i class="fa-brands fa-instagram"></i></link>
            <link to="twitter.com"><i class="fa-brands fa-twitter"></i></link>
            <link to="facebook.com"><i class="fa-brands fa-facebook-square"></i></link>
>>>>>>> 9aa1713d4f5d1783bec904ec920f825caf435c5e
        </div>
        <div class="integrantes">
            <p><strong>Integrantes : Cozzo Lorenzo - Roccia Matías - Anino Lorenzo</strong></p>
        </div>
</footer>
);
}

export default Footer