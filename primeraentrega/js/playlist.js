if(sessionStorage.getItem("fav") != null) {

    let favoritosPlayList = document.querySelector(".playlist");
    let add = sessionStorage.getItem("fav").split(",")

    for (let i =0; i<add.length; i++) {
fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/track/${add[i]}`)
        .then(function(response) {
            return response.json();
        })   
        .then(function(data) {
            console.log(data)
            favoritosPlayList.innerHTML += `<article class="album">
            <a href="cancion.html?id=${data.id}"><img class="" src="${data.album.cover}"></a>
            <p class="">${data.title}</p>
            </article>`
            document.querySelector(".quitar").addEventListener("click", function(){
                let remove = sessionStorage.removeItem("fav")
                console.log(remove)
            })
        })
        .catch(function(error){
            console.log('FUNCIONAMEEEEE' + error);
        })
    }

}else{
                   let sinFavs = `<section class="playlist">
                   <p class="textoabajo">Parece que no hay canciones agregadas a tu playlist por el momento</p>
                               </section>`
                               console.log(sinFavs);
                               favoritosPlayList.innerHTML = sinFavs
}