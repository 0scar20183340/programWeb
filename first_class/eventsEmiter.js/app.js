


// const Emitter = require('./emitter');
// const { log } = require('console');
const Emitter = require('events');
// Antes utilizabamos uno que creamos, ahora usamos uno YA EXISTENTE DE NODE.JS
const config = require('./config'); //IMPORTAR CONFIG 
let emtr = new Emitter();

// emtr.on('greet', ()=>{
//     console.log('primer greet');
// });

// emtr.on('greet', ()=> {
//     console.log('segundo greet');
// });

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
}); //Viejo

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello.')
}); //NUEVO

// console.log(emtr);
emtr.emit('greet');

emtr.on('jump', ()=>{
    console.log('primer jump');
}); //VIEJO

emtr.on(config.events.JUMP, () =>{
    console.log('Hola desde el juevo jump');
}); //llamamos al evento desde config

// console.log(emtr);
emtr.emit('jump');