let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//makes a schema
let URLSchema = new Schema({
  original_url : { type: String, unique: true },
  link_id : { type: Number, unique: true },
  short_url : { type : String }
});

//make a model

let URL = module.exports = mongoose.model('URL', URLSchema);

/*let newShortUrl = new URL({
  original_url : "www.yolo.com",
  link_id: 7777,
  short_url:"yolo"
});
*/

//console.log(newShortUrl);

module.exports = {
    checkUrl(url){
    return new Promise((resolve,reject) => {
        URL.find({original_url: url}, (err,docs) => {
          if (err) return console.error(err);
          if (docs.length > 0) {
            resolve([true, url]);
          } else {
            resolve([false, url]);
          }

      })
    })
  },

    getLink(url){
      return new Promise((resolve, reject) => {
        URL.find({original_url: url}, {'_id' : 0, '__v': 0}, (err, url) => {
          if (err) return console.error(err);
          resolve(url);
        })
      })
    }
}
