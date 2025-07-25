// GET & SET in OBJECTS
let coche = {
    marca: 'Chevrolet',
    pais: 'EEUU',
    modelo: 'Camaro',
    precio: 40000,
    get descripcion(){
        return this.marca + ' ' + this.modelo
    },
    get country(){
        return this.pais.toUpperCase()
    },
    set country(country){
        this.pais = country.toUpperCase()
    }
}

//console.log(coche.descripcion)
//console.log(coche.country)
//coche.country = 'Spain'
//console.log(coche.country)

//FUNCTION CONTRUCTOR in Objects

function baseCar(brand, model, price){
    this.brand = brand,
    this.model = model,
    this.price = price
}

let car1 = new baseCar('Chevrolet','Camaro',400000)
let car2 = new baseCar('Ford','Mustang',600000)
console.log(car1)