let intentos = 3
const clave = 'js123'

while (intentos > 0){

    let entrada = 'js123'

    if(entrada === clave){
        console.log("Acceso Permitido")
        break
    } else {
        console.log("Contraseña Incorrecta, vuelve a intentarlo")
        intentos--
    }

    console.log(`Intentos restantes: ${intentos}`)
    if(intentos == 0){
        console.log("Cuenta bloqueada por demasiados intentos fallidos")
    }
}