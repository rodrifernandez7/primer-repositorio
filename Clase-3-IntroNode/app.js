let calculadora = require (__dirname + '/calculadora');

let movieQuotes = require ('popular-movie-quotes');

let fs = require ('fs');

// console.log(calculadora.multiplicar(4,5));
// console.log(calculadora.dividir(4,5))
// console.log(calculadora.sumar(4,5))
// console.log(calculadora.restar(4,5))

console.log(movieQuotes.getSomeRandom(10));

// USO DEL MODULO NATIVO (FS)

console.log(fs.readFileSync('/prueba.txt' , 'utf-8'));