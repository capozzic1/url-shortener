


const express = require('express');
const bodyParser = require('body-parser');
//mini app for different routes, better for modularity
const router = express.Router();
const testUrl = require('../controllers/testUrl');
const linkGen = require('../controllers/linkGenerator');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let db = require('../models/db');
let URL = require('mongoose').model('URL');


//doesn't work with http or https
//route for creating links / sending json response
router.get('/new/*?', (req,res) => {
  //http://localhost:3000/new/test.com
  let url = req.params[0];
  console.log(url);


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

    //console.log(idForDb);
    //create a new short url
    let shortUrl = 'localhost:3000/' + id;

    let newShortUrl = new URL({
      original_url : url,
      link_id: id,
      short_url:shortUrl
    });
    //save object into db
    db.saveLink(newShortUrl)
    //get url from that object
    .then(() => {

      return db.getLink(url);
    })
    //send response
    .then((obj) => {

      res.json(obj);
    })


  } else {
    db.getLink(url)
    .then((obj) => {

      res.json(obj);
    })

  }

  }

  function getShortObj(urlObj, reject) {
    if (reject) return console.error(reject);

    return urlObj;
  }


});

module.exports = router;
