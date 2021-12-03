const db = require("./firebase.js");

// Get all users

function getcicloruta(uid, callback){
    return db
    .collection("Bogota")
    .doc(uid)
    .get()
    .then((refDoc) => {
      callback([refDoc.data()]);
    })
    .catch((error) => {
      callback(`Error to get cicloruta ${error}`);
    });
} 

function getciclorutas(callback){
    return db
        .collection("Bogota")
        .get()
        .then((docs) => {
            var arrayciclorutas = []
            docs.forEach((ruta) => { 
                //arrayciclorutas.push(ruta._fieldsProto);
                arrayciclorutas.push(ruta.data());
            });
            callback(arrayciclorutas);
        }).catch((error) => {
            callback(`Error to get users ${error}`);
        })
} 

// Adicionar ruta
function addruta(ruta, callback){
    return db.collection("Bogota").add(ruta)
        .then(() => {
            callback("Success");
        })
        .catch((error) => {
            callback(`Error to get users ${error}`);
        })
}

const ruta = {
    nombre: "americas",
    localizacion: "bogota",
    lugares: ["centro","suba"]

}

/*
function updateruta(uid, expert, callback){
    return db.collection("experts").doc(uid).update(expert)
        .then(() => {
            callback("Success");
        })
        .catch((error) =>{
            callback(`Error to get users ${error}`);
        })
}


function deleteExpert(uid, callback){
    return db.collection("experts").doc(uid).delete()
    .then(() => {
        callback("Success");
    })
    .catch((error) =>{
        callback(`Error to get users ${error}`);
    })
}

function searchExpert(location, callback) {
    return db.collection('experts').where("location", "==", location).get()
        .then((refDoc) => {
            var arrayExperts = [];
            refDoc.forEach(doc => {       
                //doc.id --> El id del documento         
                arrayExperts.push(doc.data());
            })
            callback(arrayExperts);
        })
        .catch((err) => {
            callback("Error to search expert ", err)
        })
}

*/

module.exports = {
    getciclorutas,
    addruta,
    getcicloruta
    //updateExpertPartially,
    //deleteExpert, searchExpert
}


