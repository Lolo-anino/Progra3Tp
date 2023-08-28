let String = location.search;    
let qString = new URLSearchParams(String);
let idDet = qString.get('id')

let urldetail = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${idDet}`
let urlDetailArt = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/`

fetch(urldetail)
.then(function(ans){
    return  ans.json();
})

.then(function(detail){
    console.log(detail.data);

    let detalles = document.querySelector('.generodetail');
    console.log(detalles);

                  detalles.innerHTML =`<article class="mona">
                  <img class="cuartetito" src="${detail.picture}">
                  <p class="descrip">${detail.name}</p>
                  </atricle>`
                  
  

})
fetch(urlDetailArt + idDet + "/artists")
    .then(function(ans) {
        return ans.json();            
})
    .then(function(dArtist) {
        console.log (dArtist)

        let detalleArtistas = document.querySelector(".detailArtist")


        for(let i=0; i<=dArtist.data.length; i++) {           
            detalleArtistas.innerHTML +=`
                    <article class="detailArtist">
                    <img class="cordoba" src="${dArtist.data[i].picture}" alt="">
                    <p class="">${dArtist.data[i].name}</p>
                    </article>`
            }
})
.catch(function(error){
    console.log(error);
})