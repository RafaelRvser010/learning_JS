//Distintas formas de llamar al contenido de nuestro objeto

let artista = {
    nombre : 'Don Toliver',
    genero: 'Trap',
    edad: 25,
    pais: 'EE.UU'
}

//Llamar valor de propiedad, concatenando en cadena
//console.log(artista.nombre + ' \n' + artista.genero)

//Llamar recorriendo el objeto con for in
for(nPropiedad in artista){
    console.log(nPropiedad + ': ' + artista[nPropiedad])
}

//Asignar a una variable el metodo Object.values para recorrer los valores del objeto como una lista

//let valorArtista = Object.values(artista)
//console.log(valorArtista)

//Asignar los atributos y valores de un objeto a una variable.
let artistaList = JSON.stringify(artista)
console.log(artistaList)