// Constantes
 console.log(Math.PI)
 const MI_NUMERO = 50
 console.log(MI_NUMERO)

 //Operadores
 // Dento de JS no hace diferencia entre un decimal y entero ambos lo generaliza como valor numerico

 let a, b, c, d, e, f 

 //SUMA
 a = 5 + 7.5
 console.log(a)
 console.log(typeof a)
//RESTA
 b = 10 - 5
//MULTIPLICACION
 c = 10 * 5
//DIVISIO
 d = 8 / 4
//MODULO (RESIDUO DE LA DIVISION)
 e = 16 % 2
//POTENCIA (N_BASE, N_ELEVADO)
 f = Math.pow(b,2)
 console.log(f)

 //Operados Incremento / Decremento

 g = 0
//post incremento : queda pendiente el incremento y al siguiente llamado de la variable se aumenta su valor
 g++
 console.log(g)
//pre incremento : la variable no queda con incrementos pendientes incrementa su valor de forma instantanea.
++g 
console.log(g)

//post decremento
g--
console.log(g)
//pre decremento
--g
console.log(g)

//Ejemplo 
n1 = 5
n2 = 2
n3 = ++n1 * n2--
console.log(n3)
console.log(n1)
console.log(n2)