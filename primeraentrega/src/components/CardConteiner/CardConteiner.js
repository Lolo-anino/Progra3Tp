import React from 'react';

import Canciones from '../../components/Canciones/Canciones';
import Albumes from '../../components/Albumes/Albumes';

function CardConteiner(props) {

    return (
        <>
            {props.info.length > 0 ?
                (props.esAlbum ? 
                    (props.esBusqueda ? <section className="cardContainer">
                    {props.info.map((album, i) => (
                        <Albumes key={album + i} albumes={album} esBusqueda={true}/>
                    ))}
                </section>: <section className="cardContainer">
                    {props.info.map((album, i) => (
                        <Albumes key={album + i} albumes={album} />
                    ))}
                </section>)
                :
                <section className="cardContainer">
                    {props.info.map((tracks, i) => (
                        <Canciones key={tracks + i} canciones={tracks} />
                    ))}
                </section>)
                :
                <h2>Cargando...</h2>
            }

        </>
    );
}

export default CardConteiner;
