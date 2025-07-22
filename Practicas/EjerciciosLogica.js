// Pide un número y muestra si es par o impar 
function Par_o_Impar(n){
    if(n % 2 === 0){
        return `Es Par : ${n}`
    }else{
        return `Es Impar : ${n}`
    }
}

console.log(Par_o_Impar(11))

// Dado dos números, muestra cuál es mayor o si son iguales
function numeroMayor(n1,n2){
    if(n1 > n2){
        return `${n1} es mayor a ${n2}`
    }
    else if (n2 > n1){
        return `${n2} es mayor a ${n1}`
    } 
    else{
        return `Ambos son iguales`
    }
}

console.log(numeroMayor(20,20))

// Muestra un contador regresivo desde el número 10 hasta el 1 usando un bucle
function contadorRegresivo(){

    for(let i = 10; i > 0 ; i--){
       console.log(i)
    }
}
contadorRegresivo()

// Solicita un número N y suma desde 1 hasta N (ej: 1+2+3+...+N)
function sumaTotal(n){
    let suma = 0
    for(let i = 0; i <= n; i++){
        suma += i
    }
    return suma
}
 console.log(sumaTotal(10))