const db = require('./firebase.js');

// CRUD Users

// READ en Firebase

// Get all users

function getUsers(callBack){
    db.collection("users").get().then((usuarios) => {
        var arrayUsers = [];
        usuarios.forEach((usuario) => {
            //console.log(usuario.data());
            arrayUsers.push(usuario.data());
        });

        // Aquí se debe enviar la respuseta al get request
        callBack(arrayUsers);
    });
}

module.exports = {
    getUsers
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

// Ejemplo de escritura -> lectura en Firebase
