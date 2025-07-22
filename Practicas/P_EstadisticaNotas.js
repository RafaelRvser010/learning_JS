//Crear un pequeño programa que simule un sistema de registro y análisis de notas para estudiantes.
var notas = [10,18,12,13]
var promedio = 0

function est_Notas(){
    let n_suma = 0
    let n_mayor = 0
    let n_menor = 0

    for(let i = 0; i < notas.length; i++){
        if(notas[i] < 0 || notas [i] > 20){
            console.log(`ERROR : La nota ${i} no es valida`)
        } 
        else if (i === 0){
            n_suma += notas[i]
            //Asignamos el primer valor del array a las variables que necesitamos comparar para las proximas iteraciones
            n_mayor = notas[i]
            n_menor = notas[i]
        }
        else {
            n_suma += notas[i]
            if(notas[i] > n_mayor) n_mayor = notas[i]
            if(notas[i] < n_menor) n_menor = notas [i]
        }
    }

    promedio = n_suma / notas.length
    return `||El promedio de las notas es: ${promedio} \n||El numero mayor es: ${n_mayor} \n||El numero menor es: ${n_menor}`
}

function eval_Notas(){
    let aprobados = 0
    let reprobados = 0
    for(let i = 0; i < notas.length; i++){
        if(notas[i] <= 11){
            console.log(`${notas[i]}: Reprobado`)
            reprobados++
        } 
        else if(notas[i] > 11){
            console.log(`${notas[i]}: Aprobado`)
            aprobados++
        }
    }

    return `||Total aprobados: ${aprobados} \n||Total reprobados: ${reprobados}`
}

function eval_Promedio(promedio){
    let resultado = ''
    if(promedio >= 18){
        resultado = 'Excelente'
    }
    else if(promedio < 18 && promedio >=14){
        resultado = 'Bueno'
    }
    else if(promedio < 14 && promedio >= 11){
        resultado = 'Regular'
    }
    else if(promedio < 11){
        resultado = 'Debes mejorar'
    }
    return `Evaluacion del grupo ${resultado}`
}

console.log(est_Notas())
console.log(eval_Notas())
console.log(eval_Promedio(promedio))

