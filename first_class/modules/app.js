
//utiliza el modulo que esta en memoria greet(); del archivo app.js
//(let greet) Aqui debe de guardarse la funcion del modulo guardado y puede modificarse
let greet = require('./greet');

//suelta error AMBITO DE MODULOS: PROTECTED
//Si algo esta dentro de un modulo no es accesible a otros modulos 
greet("Hola mundo");

//El consturctor solo sirve para retornar del modulo guardado algo especifico
//no se puede modificar


