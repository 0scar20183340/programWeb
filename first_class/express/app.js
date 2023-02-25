const express = require('express')
const app = express()

app.get('/', function (req, res) {
//   res.send('Ancianas en bikini sin dentadura');
    res.writeHead(200, {'Content-Type':'text/plain'});
res.end('Haloha\n');
})

app.listen(3000, '127.0.0.1');

// Hay un html ?  es pregunta 
// se contenido del res.end se imprime en la pagina mientras lo corra