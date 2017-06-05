
const express = require('express');
const bodyParser = require('body-parser');
//mini app for different routes, better for modularity
const router = express.Router();
const testUrl = require('../controllers/testUrl');
const linkGen = require('../controllers/linkGenerator');

let urls = {original_url:"", short_url:""};
//route url shortener
router.get('/new/:url', (req,res) => {


  //check if url is valid
  if (testUrl(req.params.url)) {
  console.log(true);
  //check to see if it exists in the db
  //if doesn't exist, generate a link
  //add into database
  urls.originalUrl = req.params.url;
  } else {
  console.log("Url is not valid");
  }

 //add original url to the database, with a unique id

  //short url is hostname + port + path + unique id
   res.send(console.log(urls.originalUrl));
});

module.exports = router;
