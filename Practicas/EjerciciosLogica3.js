//Crea una función que reciba una edad y devuelva un mensaje indicando si la persona es: “Niño” si tiene menos de 12,
//“Adolescente” si tiene entre 12 y 17, “Adulto” si tiene entre 18 y 59, “Adulto mayor” si tiene 60 o más.

function edadPersona(e){
    let e_Nino = 12
    let e_Adolescente = 17
    let e_Adulto = 59

    if(e > 0 && e <= e_Nino){
        return `Edad ${e} es Niño`
    }
    else if( e > e_Nino && e <= e_Adolescente){
        return `Edad ${e} es Adolescente`
    }
    else if( e > e_Adolescente && e <= e_Adulto){
        return `Edad ${e} es Adulto`
    }
    else if (e > e_Adulto && e < 120){
        return `Edad ${e} es Adulto Mayor`
    } 
    else return `Ingrese un numero realista`
}

console.log(edadPersona(60))

//Solicita un número N y suma todos los números impares desde 1 hasta N. Muestra el resultado

function sumaImpar(n){
    let suma = 0
    for( let i = 0; i <= n; i++){
        if(i % 2 == 1){
            suma += i
        }
    }
    return `La suma de todos los impares hasta ${n} es : ${suma}`
}

console.log(sumaImpar(15))

// Crea una función que reciba dos números y un operador (+, -, *, /). Utiliza switch para devolver el resultado de la operación. Valida que no se divida entre 0.

function calculadora(n1,n2,o){
    let resultado = 0

    switch (o){
        case '-':
            resultado = n1 - n2
            break;
        case '+':
            resultado = n1 + n2
            break;
        case '*':
            resultado = n1 * n2
            break;
        case '/':
            if(n1 == 0 || n2 == 0){
                resultado = 'No se puede dividir entre 0'
            } else
            resultado = n1 / n2
            break;
    }

    return `El resultado de ${n1} ${o} ${n2} es : ${resultado}`
}

console.log(calculadora(15,2,'*'))

//Pide un número n y muestra los números desde n hasta 1 usando un bucle while.

function c_Decendiendo(c){

    while( c >= 1){
        console.log(c)
        c--
    }
}

c_Decendiendo(2)

//Crea un bucle del 1 al 10 que, en cada iteración, muestre el número y diga si es par o impar

function Par_o_Impar(){
    for (let i = 1; i <= 10; i++ ){
        if(i % 2 === 0){
            console.log(`${i} es Par`)
        }
        else console.log(`${i} es Impar`)
    }
}

Par_o_Impar()