let ptb = 0

function subirPtb(){
    ptb += 10
    console.log("Ganas 10 puntos!")

    if(ptb > 20){
        console.log("Subiste de nivel!")
    }else{
        console.log("Sigue jugando")
    }
}

subirPtb();
subirPtb();
subirPtb();

console.log(`Total de puntos: ${ptb}`)
console.log(typeof(ptb))

