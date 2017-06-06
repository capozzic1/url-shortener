
const express = require('express');
const bodyParser = require('body-parser');
//mini app for different routes, better for modularity
const router = express.Router();
const testUrl = require('../controllers/testUrl');
const linkGen = require('../controllers/linkGenerator');
let db = require('../models/db');


//route url shortener


router.get('/new/:url', (req,res) => {


  //check if url is valid
  if (testUrl(req.params.url)) {

  let exists = db.checkUrl(req.params.url);
  let url = req.params.url;
  handleLinks(exists, url);
  //console.log(db.checkUrl(4));
  //check to see if it exists in the db
  //if doesn't exist, generate a link

  //add into database

  } else {
  console.log("Url is not valid");
  }
  //troubleshoot this function
  function handleLinks(exist, uri){
    console.log(exist + "test");
    if (exist === false){
      console.log("TESTING");
    //create new link number
    let id = linkGen();
    //create a new short url
    let shortUrl = 'localhost:3000/' + id;
    let newShortUrl = new URL({
      original_url : uri,
      link_id: id,
      short_url:shortUrl
    });

    console.log(newShortUrl);
    }

  }


});

module.exports = router;
