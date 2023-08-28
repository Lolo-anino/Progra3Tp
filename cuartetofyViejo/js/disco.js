let StringDisc = location.search;       //almacena la querystring de una URL
let qStringDisc = new URLSearchParams(StringDisc);   //nos ayuda a trabajar con los parametros
let id = qStringDisc.get('id')      //permite obtener valores dentro de la queryString

let UrlDisc = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}/tracks`
let UrlDisc2 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`

// ------------- AGREGAMOS FOTOS Y DATOS DEL ALBUM ----------------

fetch(UrlDisc2)
.then(function(res){
    return res.json();
})

.then(function(data){
    console.log(data);

    let disco2 = document.querySelector('.infodelDisco');

        disco2.innerHTML += `<img src="${data.cover_medium}">
                            <h3>Este es el album " ${data.title} "</h3>
                            <h3>Del artista ${data.artist.name}</h3>
                            <h3>Se lanzo el ${data.release_date}</h3>
                            <h3>Es parte del genero ${data.genres.name}</h3>
                            `
})

.catch(function(error){
    console.log('El error fue: ' + error);
})



// ----------------- ACA VA EL REPRODUCTOR DE CADA CANCION---------------


fetch(UrlDisc)
.then(function(res){
    return res.json();
})

.then(function(data){
    console.log(data);

    let disco = document.querySelector('.discoJava');
    let infoDisco = data.data;
    let contenidoDisco = '';

    for(let i=0; i<5; i++){
        //construimos un elemento de la lista

        contenidoDisco += `<h3 class="cancion">${infoDisco[i].title}</h3>
        <iframe title="deezer-widget" class="ifra" src="https://widget.deezer.com/widget/dark/track/${infoDisco[i].id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
        <div class='vermas2'>
        <button class="trackplay">Agregar a favorito</button>
        </div>`
    }
    disco.innerHTML += contenidoDisco

})

.catch(function(error){
    console.log('El error fue: ' + error);
})