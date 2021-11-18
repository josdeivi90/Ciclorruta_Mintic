const admin = require('firebase-admin');

const serviceAccount = require('./ciclorrutamintic-e7248879c6f3.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;


