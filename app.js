




 const express = require('express');
 const port = process.env.PORT || 3000;
 const createURL = require('./routes/createURL');
 const redirectURL = require('./routes/redirect')
 const app = express();
 const mongoose = require('mongoose');
 const uri = process.env.MONGOLAB_URI;
 mongoose.connect(uri);

//for static files like css and index.html
 app.use(express.static('public'));
 //to get my routes
 app.use(createURL);
 app.use(redirectURL);

 app.listen(port, () => {
    console.log("Server is listening on " + port);
  });
