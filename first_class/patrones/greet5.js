

let greeting = "Hola desde greet 5";

let greet = () => {
    console.log(greeting);
}

let run = () => {
    console.log("ando corrinedo por que ya me hago del baño");
}

let angry = () => {
    console.log("nmms se acabo el papel");
} 


// de esta forma solo manejo los datos que yo quiero
module.exports = {
    greet,
    run,
    angry
}