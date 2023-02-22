

// funcion constructora
function Greetr(){
    this.greeting = "Hola desde la funcion constructora";
    this.greet = function (){
        console.log(this.greeting);
    }
}

module.exports = new Greetr;

// si yo inyecto dos veces el modulo, me da referencia 2 veces y 
// se tiene resultados no esperados