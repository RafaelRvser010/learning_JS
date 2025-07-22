//  Ciclo WHILE
let contador = 0
let repeticiones = 8
let contador2 = 0


while (contador < repeticiones){
    console.log(`Buenos dias! ${contador}`)
    contador++

    let condicion = contador < repeticiones
    console.log(`${contador} < ${repeticiones} -> ${condicion}`)
}

while(contador2 <= repeticiones){
    console.log(contador2++)
}

//Ciclo FOR 

let maximo = 5
for (let contador = 0; contador <= 5; contador++){
    console.log("Buenos Dias..")
    console.log(`Variable contador ${contador}`)
}

//Ejercicio FOR 
let max = 10, min = -10

for (let i = 1; i <= 10; i+=3){
    console.log(i)
}

for(let i= 1; i >= min; i-=3){
    console.log(i)
}

let suma = 0
for(let i = 0; i <= 5; i++){
    suma += i
    console.log(`Valor acumulado ${suma}`)
    console.log(`Numero de vuelta ${i}`)
}

//CICLO DO WHILE 
let intentos = 0, usuario = 'Rafael', entrada = 'Valente'
do{
    console.log(`Ingrese su usuario`)
    if(usuario === entrada){
        console.log(`Bienvenido de nuevo! ${usuario}`)
        break
    } else{
        intentos++
        console.log(`Usuario incorrecto, vuelva a intentar`)
        console.log(`Usaste ${intentos} intentos`)
    }
    
}while( 3 > intentos)console.log(`Te quedaste sin intentos`)