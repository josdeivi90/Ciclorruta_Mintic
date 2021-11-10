const db = require('./firebase.js');

// CRUD Users

// READ en Firebase

// Get all users

function getUsers(){
    db.collection("users").get().then((usuarios) => {
        usuarios.forEach((usuario) => {
            console.log(usuario.data());
        });
    });
}

module.exports = getUsers;
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

// Ejemplo de escritura -> lectura en Firebase
