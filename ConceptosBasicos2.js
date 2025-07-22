//Operadores de Asignacion
let elNumero = 10
console.log(elNumero)

elNumero = 20
console.log(elNumero)

//Operador +=
elNumero += 5
console.log(elNumero)

//Operador -=
elNumero -= 5
console.log(elNumero)
//Operador *=
elNumero *= 2
console.log(elNumero)
//Operador /=
elNumero /= 8
console.log(elNumero)

// Operador %=
elNumero %= 2
console.log(elNumero)

//Operador **= (Math.pow(2,3))
elNumero = 2**3
console.log(elNumero)

elNumero **= 2
console.log(elNumero)

let a = 5
let b = '5'

//Operadores de Igualdad == (Solo compara valor)
console.log(`${a} == ${b} -> ${a == b}`)

//Operador de Igualdad === (Compara valor y tipo de dato)
console.log(`${a} === ${b} -> ${a === b}`)

//Operador Distinto Estandar (solo valores)
console.log(`${a} != ${b} -> ${a != b}`) 

//Operador Distinto Estricto (valores y tipo)
console.log(`${a} !== ${b} -> ${a !== b}`) 

//Operador Mayor que
console.log(`${a} > ${b} -> ${a > b}`)

//Operador Mayor o igual
console.log(`${a} >= ${b} -> ${a >= b}`)

//Operadores Logicos
let c = true
let d = false 

//Operador '&&' regresa verdadero si ambos operandos se cumplen
console.log(`${c} && ${d} -> ${c && d}`)

//Operador '||' regresa verdadero si uno de los operandos se cumplen
console.log(`${c} || ${d} -> ${c || d}`)

//Operador '!' regresa el valor invertido 
console.log(`${d} -> ${!d}`)