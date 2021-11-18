
// Forma de importar variables o funciones, cuando lo que se exporta es un objeto

const {getciclorutas, addruta} = require("./src/db/crud.js");

// Servidor Express:

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log("Running on port " + port);
});


app.get('/get-rutas',function(req,res){
    getciclorutas(function(arrayciclorutas){
        res.json(arrayciclorutas)
    })
})

app.post("/postruta", function(req, res){
    const ruta = req.body;
    console.log(ruta);
    console.log(req.params);
    addruta(ruta, function(status){
        if(status === "Success"){
            res.status(201).json(status);
        } else {
            res.status(503).json(status);
        }
        
    })
})

/*
// Crear una ruta  en la DB

app.post('/crearRuta', function(req, res){
    const expert = req.body;
    console.log("hola llegue aqui");
    console.log(expert);
    console.log(req.params);
    db.addruta(expert, function(status){
        if(status === "Success"){
            res.status(201).json(status);
        } else {
            res.status(503).json(status);
        }
        
    })
})

/*
// Actualizar parcialmente un experto en la DB
app.patch('/experts/:id', function(req, res){
    const uid = req.params.id;
    const expert = req.body;

    dbE.updateExpertPartially(uid, expert, function(status){
        res.json(status);
    })
})

// Borrar experto de la base de datos
app.delete('/experts/:id',function(req, res){
    const uid = req.params.id;
    dbE.deleteExpert(uid, function(status){
        res.json(status);
    })
})



app.use(express.json()); // Se una JSON como fomrato predeterminado

app.get('/get-users',function(req,res){
    getUsers(function(arrayUsers){
//        res.send(arrayUsers);
        res.json(arrayUsers); // Así se usa cuando incluimos la línea 12: app.use(express.json());
    });
});

*/