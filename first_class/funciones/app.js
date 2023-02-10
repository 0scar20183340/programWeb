
// function greet (){
//     console.log("Hello");
// }
// greet();

// function logGreenting(fn){
//     fn();
// };
// logGreenting(greet);


// let greetMe = function (){
//     console.log("Hello from the function expression");
// }
// greetMe();
// logGreenting(greetMe);


//REFACTORIZACION DE FUNCTION CALLBACK
let greet = () => console.log("Hola Mundo");
let logGreenting = fn => fn();
let greetMe = ()=> console.log("Hello desde la expresion de la funcion");

greet();
logGreenting(greet);
greetMe();
logGreenting(greetMe);