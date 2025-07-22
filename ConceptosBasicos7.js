//use-strict
//Alcance Variables
//Variables Globales

let variableGlobal = 5
var a = 10

//Accedemos a variables globales
variableGlobal = 10
console.log(variableGlobal)

//Definimos una funcion
function miFuncion(variableLocal){
    console.log(variableLocal)
    //Se oculata una variable global
    let a = 30
    console.log(a)
}

miFuncion(variableGlobal)

//Funciones Recursivas

function funcionRecursiva(numero){
    //Caso Base
    if(numero == 1)
        console.log(numero)
    else{
        //Caso recursivo
        funcionRecursiva(numero - 1)
        console.log(numero)
    }
}

//Llamamos la funcion
funcionRecursiva(3)

let n_Aleatorio = Math.floor(Math.random()*51)+50
let min = 50, max = 101
console.log(`Entre 50 y 100 -> ${n_Aleatorio}`)
