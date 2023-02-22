

module.exports = function Greetr(){
    this.greeting = "Hola desde la funcion constructor greet4";
    this.greet = function (){
        console.log(this.greeting);
    }
}