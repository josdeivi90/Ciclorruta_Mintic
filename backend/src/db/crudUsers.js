const db = require('./firebase.js');

// CRUD Users

// READ en Firebase

// Get all users
function getUsers(callBack){
    return db.collection("users").get().then((usuarios) => {
        var arrayUsers = [];
        usuarios.forEach((usuario) => {
            //console.log(usuario.data());
            arrayUsers.push(usuario.data());
        });

        // Aquí se debe enviar la respuseta al get request
        callBack(arrayUsers);
    })
    .catch((error) => {
        callBack(`Error to get users ${error}`);
    })
}
/*
// Prueba de getUsers
getUsers((userData) => {
    console.log(userData)
});
*/

// Get a specific user
function getUser(uid, callBack){
    return db.collection("users").doc(uid).get()
    .then((refDoc) => {
        // Aquí se debe enviar la respuseta al get request
        callBack(refDoc.data());
    })
    .catch((error) => {
        callBack(`Error to get users ${error}`);
    })
}
/*
// Prueba de getUser
getUser("mTFrJg4OlUv2PkGxrzys", (userData) => {
    console.log(userData)
});
*/

// Crear un user
function addUser(usuario, callback){
    return db.collection("users").add(usuario)
        .then(() => {
            callback("Success");
        })
        .catch((error) => {
            callback(`Error to get users ${error}`);
        })
}
/*
// Prueba de addUser
const usuario = {
    "name": "Pepita",
    "surname": "Gonzalez"
}
addUser(usuario, (userData) => {
    console.log(userData)
});
*/

function updateUserTotally(uid, usuario, callback){
    return db.collection("users").doc(uid).set(usuario)
        .then(() => {
            callback("Success");
        })
        .catch((error) =>{
            callback(`Error to get users ${error}`);
        })
}
/*
// Actualizar totalmente un user
const usuario = {
    "name": "Pepito",
    "surname": "Perez"
}
updateUserTotally("mTFrJg4OlUv2PkGxrzys", usuario, function(status){
    console.log(status);
})
*/

function updateUserPartially(uid, usuario, callback){
    return db.collection("users").doc(uid).update(usuario)
        .then(() => {
            callback("Success");
        })
        .catch((error) =>{
            callback(`Error to get users ${error}`);
        })
}
/*
// Actualizar parcialmente un user
const usuario = {
    "name": "Pepita",
    "age": 24
}
updateUserPartially("mTFrJg4OlUv2PkGxrzys", usuario, function(status){
    console.log(status);
})
*/

function deleteUser(uid, callback){
    return db.collection("users").doc(uid).delete()
    .then(() => {
        callback("Success");
    })
    .catch((error) =>{
        callback(`Error to get users ${error}`);
    })
}
/*
// Borrar documento usando el id
deleteUser("mTFrJg4OlUv2PkGxrzys", (status) =>{
    console.log(status);
})
*/

// Exportar funciones
module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUserPartially,
    updateUserTotally,
    deleteUser
};



/*
// Ejemplo de escritura en Firebase
db.collection("users").add({
    first: "Ada",
    last: "lovelace",
    born: 1815
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.log("Error adding document: ", error);
});
*/