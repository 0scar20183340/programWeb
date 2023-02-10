

function greet (){
    console.log("Hello");
}
let logGreenting = (miParametro) => miParametro();
// logGreenting(greet);


//No crear mas espacios de codigo, crear funcion dentro de la invocacion
logGreenting(function(){
    console.log("Hello from a function created on the fly");
});


let logGreenting1 = (miNombre, miColor) => {
    console.log(`Hola ${miNombre} buenos dias! Tu color favorito es el ${miColor}`)
}

logGreenting1("Carlos", "Azul");


let color="rojo";
let talla="M";
let modelo="Clasico";

//Utilizar nuevas comillas
console.log("Juan tiene una playera talla " + talla + " de color " + color + " modelo " + modelo);
console.log(`Juan tiene una playera talla ${talla} de color ${color} modelo ${modelo}`);
