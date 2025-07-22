//Notas de Alumno.

let n_aprobado = 0
let n_reprobado = 0

let n1 = 15
let n2 = 18
let n3 = 11
let n4 = 20
let n5 = 18

function clasificacionNotas(nota){
    let mensaje = ''
    console.log(`Nota: ${nota} ${typeof nota}`)

    if (nota >= 18 && nota <=20){
        mensaje = 'Excelente'
        n_aprobado++
        console.log(mensaje)
    }
    else if (nota >= 14 && nota <= 17){
        mensaje = 'Bueno'
        n_aprobado++
        console.log(mensaje)
    }
    else if (nota >=11 && nota <=13){
        mensaje = 'Regular'
        n_aprobado++
        console.log(mensaje)
    }
    else if (nota < 11 && nota >= 0){
        mensaje = 'Desaprobado'
        n_reprobado++
        console.log(mensaje)
    }
    else{
        console.log('Ingrese una nota valida - sistema de evaluacion de 0 a 20')
    }

    switch(mensaje){
        case 'Excelente': console.log('¡Sigue así!'); break
        case 'Bueno': console.log('Buen Trabajo'); break
        case 'Regular': console.log('Puedes mejorar'); break
        case 'Desaprobado': console.log('Debes esforzarte mas'); break
    }
}

clasificacionNotas(n1)
clasificacionNotas(n2)
clasificacionNotas(n3)
clasificacionNotas(n4)
clasificacionNotas(n5)
console.log(`NOTAS APROBADAS ${n_aprobado}`)
console.log(`NOTAS REPROBADAS ${n_reprobado}`)

n_aprobado > 3 ? console.log('Resultado Global: APROBADO') : console.log('Resultado Global: REPROBADO')