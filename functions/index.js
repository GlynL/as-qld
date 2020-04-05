const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const express=  require('express');
const app = express();

// [START middleware]
const cors = require('cors')({origin: true});
app.use(cors);
// [END middleware]
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((req, res) => {
    // Set CORS headers
  // e.g. allow GETs from any origin with the Content-Type header
  // and cache preflight response for an 3600s
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Max-Age", "3600");
  // Send response to OPTIONS requests and terminate the function execution
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
  }
 res.json({hey: "Hello from Firebase!"});
});

