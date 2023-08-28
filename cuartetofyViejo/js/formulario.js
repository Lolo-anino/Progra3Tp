let buscar = document.querySelector('form')
let campoBusqueda = document.querySelector('input')

//le agregamos un evento a la variable buscar con sus respectivos requisitos que se ejecutan gracias a "if" y "else"
buscar.addEventListener('submit', function (e) {
    e.preventDefault()
    if (campoBusqueda.value.length >=3){
        this.submit()
    }else {
        alert("Minimo de 3 caracteres")
    }
})




