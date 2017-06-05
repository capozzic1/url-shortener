/* User Story: I can pass a URL as a parameter
and I will receive a shortened URL in the JSON response.

User Story: If I pass an invalid URL that
doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.

User Story: When I visit that shortened URL,
it will redirect me to my original link.

 */
 let Module = function(){


 let debug = require('debug')('test');
 let express = require('express');
 let bodyParser = require('body-parser');
 let app = express();
 let port = process.env.PORT || 3000;
 let urls = {original_url:"", short_url:""};

 app.use(express.static('public'));

  //create route for /new/
   //get the input after /new/
 app.get('/new/:url', (req,res) => {


   urls.originalUrl = req.params.url;
   res.send(console.log(urls.originalUrl));
 });
 //short url is hostname + port + path + unique id


app.listen(port, () => {
  console.log("Server is listening on " + port);
});

}();
