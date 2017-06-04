let MongoClient = require('mongodb').MongoClient;
//Connection URL
let url = 'mongodb://localhost:27017/myproject';

//Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {

  console.log("Connected to the server");

  db.close();
});
