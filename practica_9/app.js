
const express = require('express')
const app = express()

// .get es el metodo por donde me va contestar 
app.get('/', function (req, res) {
  res.send('Ancianas en bikini sin dentadura');
})

app.get('/uno', function (req, res) {
    res.send('Hola mundo, desde la ruta uno');
  })

  app.get('/prueba', function (req, res) {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Hola señoras semihomosexuales</h1>
    </body>
    </html>`);  
  })
  
  

app.listen(3000);

// Hay un html ?  es pregunta 
// se contenido del res.end se imprime en la pagina mientras lo corra