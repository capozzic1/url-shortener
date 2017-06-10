


//https://shorturlcc.herokuapp.com/

 const express = require('express');
 const port = process.env.PORT || 3000;
 const createURL = require('./routes/createURL');
 const redirectURL = require('./routes/redirect')
 const app = express();
 const mongoose = require('mongoose');

 mongoose.connect('mongodb://heroku_kzd0sz0r:summer89@ds119682.mlab.com:19682/heroku_kzd0sz0r');

 app.use(express.static('public'));
 app.use(createURL);
 app.use(redirectURL);

 app.listen(port, () => {
    console.log("Server is listening on " + port);
  });
