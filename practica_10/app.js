
const express = require('express');
const app = express();

// el .PORT indica que si hay un puerto disponible habra ese puerto, sino que habra el puerto 3000
let port = process.env.PORT || 3000;

// esto se mostrara en el host raiz las demas rutas como /api y /perso...  tendran otro contenido
app.get('/', function(req, res){
    res.send(`<html><head><body><h1>expreshion Function -- NO LE SUPE AL NODEMON PERO JALO</h1></body></head></html>`)
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