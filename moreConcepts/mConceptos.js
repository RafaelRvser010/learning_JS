// Definir un objeto
let persona = {
    //Asignamos propiedades al objeto
    nombre : 'Rafael',
    apellido: 'Chura',
    email: "rchura@gmail.com",
    edad: 23,
    //Asignamos una funcion como propiedad y accedemos a propiedades locales mediante 'this'
    nombreCompleto: function (){
        return this.nombre + ' ' + this.apellido
    }
}

//Otra manera de definir un objeto
let auto = new Object();
//Asignamos propiedades al objeto
auto.marca = 'Porsche';
auto.precio = 50000;
auto.modelo = 'GT3 - 911';
auto.anio = 2005;

//Acceder a propiedades de los objetos
console.log(auto)
console.log(auto.marca)
console.log(persona.email)
console.log(persona.nombreCompleto())
//Otra manera de acceder a las propiedades
console.log(auto['modelo'])
console.log(persona['nombre'])

//Recorrer las propiedades de un objeto
for(nombrePropiedad in auto){
    console.log('Valor dentro de propiedad ' + nombrePropiedad + ' : ' + auto[nombrePropiedad])
}