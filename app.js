/* User Story: I can pass a URL as a parameter
and I will receive a shortened URL in the JSON response.

User Story: If I pass an invalid URL that
doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.

User Story: When I visit that shortened URL,
it will redirect me to my original link.

 */



 const express = require('express');
 const port = process.env.PORT || 3000;
 const urlShortener = require('./routes/urlshortener');
 const app = express();

 app.use(express.static('public'));
 app.use('/', urlShortener);

 app.listen(port, () => {
    console.log("Server is listening on " + port);
  });
