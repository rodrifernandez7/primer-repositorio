var variable1 = 'Esta es una variable creada con VAR'
let variable2 // Undefined
// const variable3;

// Testeo de Scope con Let;
variable2 = 23;

let prueba;

if(true){
let prueba = 1;
console.log(prueba);
}


//

let edad = 14;
let acompañadoPorAdulto = true;

if(edad >= 18 || acompañado == true){
    console.log('Puede pasar');
}else {
    console.log('Vuelva a los 18 por favor');
}

//

if (edad >= 18){
    console.log('Puede pasar');
}else if (acompañadoPorAdulto == true){
    console.log('Puede pasar con restricciones');
}else{
    console.log('Vuelva a los 18 por favor');
}
//

let frutass = ['Frutilla', 'Manzana', 'Pera'];

console.log(frutas.indexOf('Manzana'));

//

function hayFruta(coleccion, fruta)
    if (coleccion.indexOf(fruta) != -1)

hayFruta(frutas, 'Banana')