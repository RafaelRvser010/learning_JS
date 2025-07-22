// Genera un número aleatorio entre 1 y 10 e intenta adivinarlo con prompt (puedes simular la entrada)
function adivinaNumero(n){
    let aleatorio = Math.floor(Math.random()*11)
    if (aleatorio == n){
        console.log(`Adivinaste el numero! ${aleatorio}`)
    } else{
        console.log(`Fallaste el numero aleatorio es : ${aleatorio}`)
    }
}
adivinaNumero(2)

// Crea un programa que muestre la tabla de multiplicar del 5
function multi5(){
    for(let i = 0; i < 6; i++){
        console.log(`${i} x 5 = ${i * 5}`)
    }
}
multi5()

// Dada una cadena, cuenta cuántas vocales contiene
function contarVocal(cadena){
    let n_vocales = 0

    for(let i = 0; i < cadena.length; i++){
        let letra = cadena[i]
        if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
            n_vocales+=1
        }
        console.log(`Indice : ${i} Valor : ${letra}`)
    }

    console.log(`El string ingresado tiene ${n_vocales} vocales`)
}

contarVocal('murcielago')

// Ingresa 1234 → muestra 4321 (sin convertir a string)
function sinConvertir(n){
    
}
