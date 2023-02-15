let obj = {};
let person = {
    nombre : "carlos",
    apellido: "Fonceca",

    getName: function (){
        return `${this.nombre} ${this.apellido}`
        // llama a la isntancia del objeto person
    }, //solo lectura

    domicilio: {
        calle: "Madero #222",
        colonia: "Union",
        cp: 29980,
        minicipio: "Colima",

        getDomicilio: function (){
            //this manda a llamar la instancia 
            // person.domicilio   llama al nombre de la instancia

            // /utilzar this ES BUENA PRACTICA
            return `Calle: ${this.calle} Colonia: ${this.colonia} Centro CP:${this.cp}, ${this.minicipio}`
            // llama a la instancia del objeto domicilio ={}
        }
    }
}

console.log(person.getName());
person.nombre = "Oscar"
person.apellido = "Gonzalez"

console.log(person.domicilio.getDomicilio());
// console.log(`nombre: ${person.nombre} y apellido: ${person.apellido}`);
//objeto JSON = objetsLiteral
// key value = valores prinitos, funciones, objetos