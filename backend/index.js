// Forma de importar variables o funciones, cuando lo que se exporta es un objeto
const {getUsers} = require('./src/db/crud');

//getUsers();

// Servidor Express:

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Se una JSON como fomrato predeterminado

app.get('/get-users',function(req,res){
    getUsers(function(arrayUsers){
//        res.send(arrayUsers);
        res.json(arrayUsers); // Así se usa cuando incluimos la línea 12: app.use(express.json());
    });
});

app.get('/peticion2',function(req,res){

    // Función a ejecutar

    res.send('Bienvenidos al servidor Experts - Peticion 2')
});

app.listen(port, () => {
console.log("Running on port " + port);
});
