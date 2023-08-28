let sT = location.search;       //almacena la querystring de una URL
let QsT = new URLSearchParams(sT);   //nos ayuda a trabajar con los parametros
let buscado = QsT.get('buscarr')      //permite obtener valores dentro de la queryString


let UrlSearch = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${buscado}` 


fetch(UrlSearch)
.then(function(res){
    return res.json();
})

.then(function(data){
    console.log(data);
    let result = document.querySelector('.buscate');
    let search = document.querySelector('.search');
    

    if(data.data.length==0){
        result.innerHTML = `No se han encontrado resultados de: ${buscado}`
    }   else{
        result.innerHTML = `Resultado de busqueda de: ${buscado}`
    }

    for(let i=0; i<5; i++){
        search.innerHTML += `<article class='cantanteCanciones2'>
                            <a class='linke' href='./cancion.html?id=${data.data[i].artist.id}'>
                            <img class='imgsearch' src='${data.data[i].album.cover_medium}'>
                            <h3 class='imgsearch'>${data.data[i].title}</h3>
                            <h3 class='imgsearch'>Del artista ${data.data[i].artist.name}</h3>
                            </a>
                            </article>`

    }

})

.then(function(error){
    console.log('El error es ' + error);
})
