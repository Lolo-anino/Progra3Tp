//metemos variable de la api para traer la info
let urlArtistas = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart"
fetch(urlArtistas)
    .then(function(res){
            return res.json();
    })
    .then(function(data){
        console.log(data); //mostramos por consola

        let info = data.artists.data; //agarramos el array de la api para buscar los datos

        let listaArtista = document.querySelector('.cantantes');
        let contenido = '';

        for(let i=0; i<5; i++){
            //construimos un elemento de la lista

            contenido += `<article class="lakonga">
                        <a href="cantante.html?id=${info[i].id}"><img src="${info[i].picture_medium}"></a>
                        <p>${info[i].name}</p>
                        </article>`;
        }

        listaArtista.innerHTML = contenido;



        //--------------------COMENZAMOS CON LA SECCION ALBUMES!----------------------------



        let infoAlbumes = data.albums.data; //creamos otro array de la api para buscar los datos de el album esta vez

        let listaAlbumes = document.querySelector('.albumesfotos');
        let contenidoAlbum = '';

        for(let i=0; i<5; i++){
            //volvemos a contruir un elemento de la lista

            contenidoAlbum += `<article class="album">
                                 <a href="disco.html?id=${infoAlbumes[i].id}"><img src='${infoAlbumes[i].cover_medium}'></a>
                                 <p>${infoAlbumes[i].title}</p>
                                </article>`
        }

        listaAlbumes.innerHTML = contenidoAlbum;
        



        //--------------------COMENZAMOS CON LA SECCION CANCIONES!----------------------------



        let infoCanciones = data.tracks.data; //creamos otro array de la api para buscar los datos de el album esta vez

        let listaCanciones = document.querySelector('.cancionesindex');
        let contenidoCancion = '';

        for(let i=0; i<5; i++){
            //volvemos a contruir un elemento de la lista

            contenidoCancion += `<article class="album">
                                <a href="cancion.html?id=${infoCanciones[i].id}"><img src='${infoCanciones[i].artist.picture_medium}'></a>
                                <p>${infoCanciones[i].title}</p>
                                </article>`
        }

        listaCanciones.innerHTML = contenidoCancion;
            


    })

    .catch(function(error){
        console.log(error);
    })