/* User Story: I can pass a URL as a parameter
and I will receive a shortened URL in the JSON response.

User Story: If I pass an invalid URL that
doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.

User Story: When I visit that shortened URL,
it will redirect me to my original link.

 */

 let express = require('express');
 let bodyParser = require('body-parser');
 let app = express();
 let port = process.env.PORT || 3000;
 //create route for /new/

 //get the input after /new/

//

app.listen(port);
