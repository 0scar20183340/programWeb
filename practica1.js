//npm init -y crea package.json
//package.json paquetes de dependencias instalados 




const { toCelsius } = require ("celsius");    
//DENTRO DEL REQUIERE BORRAR Y PONER DOBLE COMMILLA, 
//ASI BUSCA AUTOMATICO DE LA RUTA; 
//Por eso marca error


console.log("CELSIUS A F")
console.log(toCelsius(100));
console.log(toCelsius(100 , 3 ));
console.log(toCelsius ( ' 105.981 grados F ' , 5 ));


const { toFahrenheit } = require ("celsius") ;  

console.log("F A C")
console.log(toFahrenheit(36)); //  97 
console.log(toFahrenheit(36.68 , 3 )); //  98.024 
// toFahrenheit ( ' -40.691 grados C ' , 5 )  ; //  -41.24380 

console.log("PRUEBA DOBLE")
const convertidor = require("celsius");
//Asi uso la dependencia completa
console.log(convertidor.toCelsius(100));
console.log(convertidor.toFahrenheit(36));

