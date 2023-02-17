


let obj ={
    nombre: "Oscar",
    edad: 44,
    apellido: "Gonzalez",
    keypress: function (){
        return 'Se ha presionado una tecla';
    },
    mouseOver: function(){
        return 'El puntero del mouse esta arriba'
    }
}


// console.log(obj.nombre);
// // Harcodear
// console.log(obj['nombre']);
// // guardamos el valor de la llave para poder reutilzairla 
// let myKey = 'nombre';
// console.log(obj[myKey]);


// // invocamos las nuevas funciones dentro del objeto
// myKey = 'keypress';
// console.log(obj[myKey]());
// myKey = 'mouseOver';
// console.log(obj[myKey]());


let myArray = [];
myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function () {
return "hola desde el array";
});

console.log(myArray);

let funArray = [];
funArray.push(()=> {console.log('Function 1')});
funArray.push(()=> {console.log('Function 2')});
funArray.push(()=> {console.log('Function 3')});


// sirve para recorrer un aray con mismos valores
// sirve para disparar TODOS los datos del array
funArray.forEach((item) => {item()});





const Emitter = require('./emitter');
let emtr = new Emitter();

emtr.on('greet', ()=>{
    console.log('primer greet');
});

emtr.on('greet', ()=> {
    console.log('segundo greet');
});

console.log(emtr);
emtr.emit('greet');

emtr.on('jump', ()=>{
    console.log('primer jump');
});

emtr.emit('jump');
console.log(emtr);