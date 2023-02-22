

let greet = require('./greet1');
greet();

let greet2 = require('./greet2').greet;
// recino en variable y se guarda la funcion
greet2();

// let greet2a = require('./greet2');
// greet2a.greet();
// // asi es el objeto y con notacion del punto llegar a la funcion

const greet3 = require('./greet3'); //objeto construido/instanciado
// console.log(greet3);
greet3.greet();
greet3.greeting = "Hola desde la app";
// mi modulo exporta un objeto a memoria y cambia su contenido con esto

let greet3b = require('./greet3');
greet3b.greet();



const Greet4 = require('./greet4'); //constructor
let myGreet  = new (Greet4);
myGreet.greet();




const greet5 = require('./greet5');
greet5.greet();
greet5.run();
greet5.angry();