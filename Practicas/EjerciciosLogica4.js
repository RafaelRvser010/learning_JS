function calcularPromedio(n1,n2,n3){
    let promedio = ((n1 + n2 + n3) / 3)

    if(promedio >= 12){
        return `Has Aprobado el curso : Promedio ${promedio.toFixed(2)}`
    } else return `Has Desaprobo el curso : Promedio ${promedio.toFixed(2)} `
}

console.log(calcularPromedio(10,20,14))

function ev_Num(n){
    let s_impar = 0
    let s_par = 0
    let l_impar = []
    let l_par = []
    for(let i = 1; i <= n; i++){
        if(i % 2 === 0 ){
            console.log(`Par: ${i}`)
            s_par += i
        }
        else{
            console.log(`Impar ${i}`)
            s_impar +=i
        }
    }

    return ` \n|| Suma total pares: ${s_par} \n|| Suma total impares: ${s_impar}`
}

console.log(ev_Num(5))