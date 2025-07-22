function verificarClima(temperatura){

    console.log(`Temperatura actual : ${temperatura}`)
    console.log(typeof temperatura)

    if(temperatura >= 25){
        console.log("Hace calor!")
    }
    else if (temperatura >= 15 && temperatura < 25) {
        console.log("Clima agradable")
    }
    else{
        console.log("Hace frio")
    }  

}

verificarClima(12)
verificarClima(25)
verificarClima(18)