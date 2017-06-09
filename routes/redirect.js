const express = require('express');
const bodyParser = require('body-parser');
//mini app for different routes, better for modularity
const router = express.Router();
const mongoose = require('mongoose');

let db = require('../models/db');
let URL = require('mongoose').model('URL');

// http://localhost:3000/blahblah


router.get('/:url', (req, res) => {
    console.log(req.params.url);
    let url = req.params.url;



    db.getLink(url).then(getShortObj);
});

function getShortObj(urlObj, reject) {
  if (reject) return console.error(reject);

  console.log(urlObj);
}


module.exports = router;
