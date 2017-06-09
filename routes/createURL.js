


const express = require('express');
const bodyParser = require('body-parser');
//mini app for different routes, better for modularity
const router = express.Router();
const testUrl = require('../controllers/testUrl');
const linkGen = require('../controllers/linkGenerator');
const mongoose = require('mongoose');

let db = require('../models/db');
let URL = require('mongoose').model('URL');



//route for creating links / sending json response
router.get('/new/:url', (req,res) => {
  let url = req.params.url;

  //check if url is valid
  if (testUrl(url)) {

  let queryDb = db.checkUrl(url)
  .then(handleLinks,
    (reject) => {
      console.log(reject);

    });

  } else {
  console.log("Url is not valid");
  }


  function handleLinks([exists, url]){
    console.log(exists);

    if (exists === false){
    //create new link number
    let id = linkGen();
    //create a new short url
    let shortUrl = 'localhost:3000/' + id;

    let newShortUrl = new URL({
      original_url : url,
      link_id: id,
      short_url:shortUrl
    });
    //save into db
    newShortUrl.save((err) => {
      if (err) return console.error(err);
    });
    //send response
    db.getLink(url).then(getShortObj);
  //if url does exist in db
  } else {
    db.getLink(url).then(getShortObj);

  }

  }

  function getShortObj(urlObj, reject) {
    if (reject) return console.error(reject);

    res.json({urlObj});
  }


});

module.exports = router;
