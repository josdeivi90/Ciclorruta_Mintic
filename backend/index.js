
// Forma de importar variables o funciones, cuando lo que se exporta es un objeto
const dbU = require('./src/db/crudUsers');

const {getciclorutas, addruta, getcicloruta} = require("./src/db/crud.js");

// Servidor Express:

const express = require('express');
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log("Running on port " + port);
});


app.get('/ruta/:id',function(req,res){
    const uid = req.params.id
    getcicloruta(uid, function(arrayciclorutas){
        res.json(arrayciclorutas)
    })
})


app.get('/getrutas',function(req,res){
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

// Traer todos los users
app.get('/users',function(req,res){
    dbU.getUsers(function(arrayUsers){
//        res.send(arrayUsers);
        res.json(arrayUsers); // Así se usa cuando incluimos la línea 12: app.use(express.json());
    });
});

// Traer un user especifico
app.get('/users/:id',function(req,res){
    const uid = req.params.id;
    dbU.getUser(uid, function(refDoc){
        res.json(refDoc);
    })
});

// Crear un user en la DB
app.post('/users', function(req, res){
    const usuario = req.body;
    dbU.addUser(usuario, function(status){
        if (status === "Success"){
            res.status(201).json(status);
        } else {
            res.status(503).json(status);
        }
    })
})

// Actualizar totalmente un user en la DB
app.put('/users/:id',function(req,res){
    const uid = req.params.id;
    const usuario = req.body;
    dbU.updateUserTotally(uid, usuario, function(status){
        res.json(status);
    })
});

// Actualizar parcialmente un user en la DB
app.patch('/users/:id',function(req,res){
    const uid = req.params.id;
    const usuario = req.body;
    dbU.updateUserPartially(uid, usuario, function(status){
        res.json(status);
    })
});

// Borrar un user en la DB
app.delete('/users/:id',function(req,res){
    const uid = req.params.id;
    dbU.deleteUser(uid, function(status){
        res.json(status);
    })
});
*/