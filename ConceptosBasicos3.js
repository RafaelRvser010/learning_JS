//Sentencias de decision 
let a = -6

if (a > 0){
    console.log(`Valor positivo ${a}`)
}
else if (a < 0){
    console.log(`Valor Negativo ${a}`)
}
else
    console.log(`Valor cero : ${a}`)


//Operador Ternario

a > 0 ? console.log(`Valor positivo: ${a}`) : console.log(`Valor negativo o cero: ${a}`)

//Switch

let diaSemana = 5

switch(diaSemana){
    case 1:
        console.log("Lunes")
        break
    case 2:
        console.log("Martes")
        break
    case 3:
        console.log("Miercoles")
        break
    case 4:
        console.log("Jueves")
        break
    case 5:
        console.log("Viernes")
        break
    case 6:
        console.log("Sabado")
        break
    case 7:
        console.log("Domingo")
        break
    default:
        console.log("Error")
}