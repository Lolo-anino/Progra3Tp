import React from 'react';
import Canciones from '../../components/Canciones/Canciones';
import Albumes from '../../components/Albumes/Albumes';

function CardConteiner(props) {

    return (
        <>
            {props.info.length > 0 ?
                (props.esAlbum ? 
                     <section className="cantantes">
                    {props.info.map((album) => (
                        <Albumes key={album} albumes={album} />
                    ))}
                </section>
                :
                <section className="cantantes">
                    {props.info.map((tracks) => (
                        <Canciones key={tracks} canciones={tracks} />
                    ))}
                </section>)
                :
                <h2>Cargando...</h2>
            }

        </>
    );
}

export default CardConteiner;
