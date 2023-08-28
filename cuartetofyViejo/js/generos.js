fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
.then(function(ans){
     return  ans.json();
})

.then(function(genre){
     console.log(genre.data);

     let generos = document.querySelector('.genres');
     console.log(generos);

        for(let i=0; i<=genre.data.length; i++){
                   generos.innerHTML +=`<article class="generito">
                   <a href="./detalle-genero.html?id=${genre.data[i].id}"><img class="cuartetito" src="${genre.data[i].picture}"></a>
                   <p class="generoNombre">${genre.data[i].name}</p>
                   </atricle>`
                   
    }
   

})
 .catch(function(error){
     console.log(error);
})