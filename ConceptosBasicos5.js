//Arreglos en JS
let numeroArreglo = [16,21,0,3,50]
let numeroArreglo2 = new Array()
//Modificar los elementos del Arreglo 

numeroArreglo[0] = 15
numeroArreglo[1] = 11

//Accedemos a los valores del arreglo
console.log(`Valor 1: ${numeroArreglo[0]}`)
console.log(numeroArreglo)
console.log(numeroArreglo2)

//Iteracion de Arreglos
for (let i = 0; i < numeroArreglo.length; i++){
    console.log(`Valor ${i + 1} = ${numeroArreglo[i]}`)
}

// Matrices
let matriz = [[100,200,300],[400,500,600]]
//Modificar los valores de matriz

matriz[0][0] = 50
matriz[0][1] = 150
matriz[1][0] = 400

console.log(`Valor matriz, renglon 1 ${matriz[0]}`)
console.log(`Valor matriz, renglon 2 ${matriz[1]}`)

for( let ren = 0; ren < matriz.length; ren++){
    for(let col =0; col < matriz[ren].length; col++){
        console.log(`Valor [${ren}] [${col}] = ${matriz[ren][col]}`)
    }
}