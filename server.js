const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



// app.get('/', (req, res) => {
//     // res.send('Hola Mundo');
//     let salida = {
//         nombre: 'Samuel Alcaraz Guzman',
//         edad: 30,
//         url: req.url
//     };

//     res.send(salida);
// });

// app.get('/data', (req, res) => {
//     res.send('Hola Data');
// });

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'sAMUEL aLCARAZ'
    });
});
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});