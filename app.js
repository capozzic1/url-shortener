/* User Story: I can pass a URL as a parameter
and I will receive a shortened URL in the JSON response.

User Story: If I pass an invalid URL that
doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.

User Story: When I visit that shortened URL,
it will redirect me to my original link.

 */
/* true
false
1226
saved
*/


 const express = require('express');
 const port = process.env.PORT || 3000;
 const createURL = require('./routes/createURL');
 const redirectURL = require('./routes/redirect')
 const app = express();
 const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost:27017/shorturl');

 app.use(express.static('public'));
 app.use(createURL);
 app.use(redirectURL);

 app.listen(port, () => {
    console.log("Server is listening on " + port);
  });
