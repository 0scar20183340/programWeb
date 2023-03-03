const express = require('express');
const app = express();

//mapeamos el nombre de carpeta public a la carpeta virtual assets
// DOBLE GUION BAJO PENDEJO!! --
app.use('/assets',express.static(__dirname + '/public'));

app.use('/',function (req,res, next){
    console.log('Request Url:' + req.url);
    next();
})

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
    <link href="/assets/raiz.css" type="text/css" rel="stylesheet">
    <title>Document</title>
</head>
<body>
    <h1>Hola guapa</h1>
</body>
</html>`
    res.send(cad);
});




app.get('/ogo', function(req, res){
    cad = `
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyecto</title>
    <link rel="stylesheet" href="/css/normalize.css">
    <link href="https://fonts.googleapis.com/css2?family=Krub:wght@400;700&display=swap" rel="stylesheet">
  
    <link href="/assets/style.css" type="text/css" rel="stylesheet">
</head>
<body>
    
    <header>
        <h1 class="titulo">Oscar Heriberto <span>FreeLancer</span></h1>
    </header>
    <div class="nav-bg">
        <nav class="navegacion-principal contenedor">
            <a href="#">Inicio</a>
            <a href="#">Sobre Mi</a>
            <a href="#">Clientes</a>
            <a href="#">Contacto</a>

            <img src="#" alt="">
        </nav>
    </div> 

    <section class="hero">
        <div class="contenido-hero">
            <h2> Desarrollo Web <span>FreeLancer</span></h2>
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#ffbf00" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="11" r="3" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg>
                Colima, Colima
            </p>
            
            
            <a class="boton" href="#">Contactar</a>
        </div>
    </section>  
    
    <main class = "contenedor sombra">
        <h2>Mis Servicios</h2>


<div class="servicios">
        <section class="servicio">
            <h3>Diseño Web</h3>
            <div class="icono">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="32" height="32" viewBox="0 0 24 24" stroke-width="2.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
                <circle cx="7.5" cy="10.5" r=".5" fill="currentColor" />
                <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
                <circle cx="16.5" cy="10.5" r=".5" fill="currentColor" />
            </svg>
            </div>
            <p>
                Contrariamente a la creencia popular, 
                Lorem Ipsum no es simplemente un texto aleatorio. 
                Tiene raíces en una pieza de literatura latina clásica del 45 a. C., 
                que tiene más de 2000 años. 
            </p>
        </section>
    
        <section class="servicio">
    <h3>Aplicaciones Móviles</h3>
            <div class="icono">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-android" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="4" y1="10" x2="4" y2="16" />
                <line x1="20" y1="10" x2="20" y2="16" />
                <path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" />
                <line x1="8" y1="3" x2="9" y2="5" />
                <line x1="16" y1="3" x2="15" y2="5" />
                <line x1="9" y1="18" x2="9" y2="21" />
                <line x1="15" y1="18" x2="15" y2="21" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-apple" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z" />
                <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
            </svg>
            </div>
            <p>
                Contrariamente a la creencia popular, 
                Lorem Ipsum no es simplemente un texto aleatorio. 
                Tiene raíces en una pieza de literatura latina clásica del 45 a. C., 
                que tiene más de 2000 años. 
            </p>
        </section>
        <section class="servicio">
            <h3>E-Commerce</h3>
            <div class="icono">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-credit-card" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <line x1="7" y1="15" x2="7.01" y2="15" />
                <line x1="11" y1="15" x2="13" y2="15" />
            </svg>
            </div>
            <p>
                Contrariamente a la creencia popular, 
                Lorem Ipsum no es simplemente un texto aleatorio. 
                Tiene raíces en una pieza de literatura latina clásica del 45 a. C., 
                que tiene más de 2000 años. 
            </p>
        </section> 
</div> <!--CLASE SERVICIOS-->

<section>
    <h2>Contacto</h2>
    <form class="formulario">
        <fieldset>
            <legend>Contactanos llenando todos los campos</legend>
            <div class="contenedor-campos">
                <div class="campo">
                <label>Nombre</label>
                <input type="text" placeholder="Tu Nombre">
                </div>
                <div class="campo">
                    <label>Teléfono</label>
                    <input type="tel" placeholder="Tu Teléfono">
                </div>
                <div class="campo">                    
                    <label>Correo</label>
                    <input type="email" placeholder="Mail">
                </div>
                <div class="campo">
                    <label> Mensaje </label>
                    <textarea class="descripcion" placeholder="Descripcion"></textarea>
                    
                </div>
            </div>
                <div class="alinear-derecha flex">
                    <input class="boton w-100" type="submit" value="Enviar">
                </div>
            </fieldset>
        </form>
    </section>
</main>   
    <footer>
        <p class="end">Todos los derechos reservados para Oscar Heriberto FreeLancer</p>
    </footer>        
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
    res.send('<html><head></head><body><h1>Person:' + req.params.id +'</h1></body></html>')
});

app.listen(port);
