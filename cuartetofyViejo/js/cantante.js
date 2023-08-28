let String = location.search;       //almacena la querystring de una URL
let qString = new URLSearchParams(String);   //nos ayuda a trabajar con los parametros
let id = qString.get('id')      //permite obtener valores dentro de la queryString

let UrlArt = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`
let UrlArt2 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`

fetch(UrlArt)
.then(function(res){
    return res.json();
})

.then(function(data){
    console.log(data);

    let artista = document.querySelector('.disc');

    artista.innerHTML += `<div class="fotoartist">
                        <img src='${data.picture_medium}'>
                        <p>${data.name}</p>
                        <h3 class="artistasJs">SUS ALBUMES...</h3></div>
                        `
})

.catch(function(error){
    console.log('El error fue: ' + error);
})

// ------------ TRAYENDO LOS ALBUMES DEL ARTISTA CLICKEADO ------------

fetch(UrlArt2)
.then(function(res){
    return res.json();
})

.then(function(data){
    console.log(data);

    let artistaAlbum = document.querySelector('.cantante');
    let infoArtista = data.data;
    let contenidoArtista = '';

    for(let i=0; i<5; i++){
        //construimos un elemento de la lista

        contenidoArtista += `<article class='cantanteCanciones'>
                            <a href="disco.html?id=${infoArtista[i].id}" class='linkcantante'><img src='${infoArtista[i].cover_medium}'>
                            <p class='CantanteName'>${infoArtista[i].title}</p></a>
                            </article>`
    }
    artistaAlbum.innerHTML += contenidoArtista
})

.catch(function(error){
    console.log('El error fue: ' + error);
})