const express = require('express');
const app = express();

//mapeamos el nombre de carpeta public a la carpeta virtual assets
// DOBLE GUION BAJO PENDEJO!! --
app.use('/assets',express.static(__dirname + '/public'));

// el .PORT indica que si hay un puerto disponible habra ese puerto, sino que habra el puerto 3000
let port = process.env.PORT || 3000;

// esto se mostrara en el host raiz las demas rutas como /api y /perso...  tendran otro contenido
app.get('/', function(req, res){
    cad = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/assets/style.css" type="text/css" rel="stylesheet">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`
    res.send(cad);
});

//manda con el formato Json un objeto y no un texto
app.get('/api', function(req, res){
    res.json({firstname: 'Oscar', lastname: 'Heriberto'})
});


//el requ.params utiliza el .id y lo convuerte en una ruta
app.get('/person/:id', function(req, res){
    res.send(`<html><head></head><body><h1>Person:` + req.params.id +`</h1></body></html>`)
});

app.listen(port);
