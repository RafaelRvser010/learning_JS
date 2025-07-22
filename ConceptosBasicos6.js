//Funciones en JS
function Saludar(mensaje){
    console.log(`Mensaje : ${mensaje}`)
}

Saludar('Hola')

function Sumar(a,b){
    let resultadoSuma = a + b
    return resultadoSuma
}

let argA = 5, argB = 10
let resultado = Sumar(argA, argB)
console.log(`Resultado Suma ${resultado}`)

//Paso por Valor en JS
function cambioValor(parametro){
    parametro[0] = 20
}

let argumento = 10
console.log(`Antes de llamar funcion : valor ${argumento}`)
cambioValor(argumento)
console.log(`Despues de llamar funcion : valor ${argumento}`)

//Paso por referencia 
let argumento2 = [10]
console.log(`Antes de llamar a la funcion: valor ${argumento2}`)
cambioValor(argumento2)
console.log(`Despues de llamar la funcion : valor ${argumento2}`)