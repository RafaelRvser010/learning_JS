//Funciones Incorporadas en JavaScript

//Obtener el largo de una cadena || las cadenas son arreglos de caracteres

let cadena = 'Hola'
console.log(`Largo cadena ${cadena.length}`) 

//No podemos modificar una cadena en JS
//Una cadena es inmutable
console.log(cadena[0])
cadena[0] = 'a'
console.log(cadena[0])

cadena = 'Adios'

for (let i = 0; i < cadena.length; i++){
    console.log(`${i} - ${cadena[i]}`)
}

//Subcadena en JS
let cadena1 = 'Hola Mundo'

let subcadena1 = cadena1.substring(0,4)
console.log(subcadena1)

let subcadena2 = cadena1.substring(5)
console.log(subcadena2)

//Concatenacion de Cadenas
let c1 = 'Hola', c2 = 'Mundo'
let c3 = c1 + ' ' + c2
console.log(c3)

// String Interpolation
let c4 = `${c1} ${c2}`
console.log(c4)

// Si son numeros se suman
let a = 5, b = 7
console.log(a + b)

//parseInt() || toString()

//Generar valores aleatorios
console.log(Math.random()*101)
//Math.floor rendondea a entero inferior mas cercano
console.log(Math.floor(Math.random()*101))
//Valor aleatorio entre 100 y 200
let valorAleatorio = Math.floor(Math.random()*101) + 100
console.log(valorAleatorio)

//Formula generica (min incluida, max no incluido)
let min = 100, max = 201 //Rango entre 100 y 200
valorAleatorio = Math.floor(Math.random()* (max - min + 1) + min)
console.log(valorAleatorio)

//Valor Absoluto
let numero =  -10
console.log(Math.abs(numero))

//Math.round() || Math.trunc || Math.floor || Math.ceil

//Crea una función que reciba un número y devuelva la suma de todos los números pares desde 0 hasta ese número (inclusive).

function sumaPar(n){
    for(let i = 0; i <= n; i++){
        let suma = 0
        if(i % 2 === 0){
            let n_par =+ i
            console.log(n_par)
        }
    }
}

let aleatorio = Math.floor(Math.random()*21)+20
console.log(aleatorio)