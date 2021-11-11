const admin = require('firebase-admin');

const serviceAccount = require('./ciclorrutamintic-4c7fa91c0b51.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;
