let mongoose = require('mongoose');
let Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
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
          if (err) console.error(err);
          resolve(url);
        })
      })
    },

    getLinkById(id){
      return new Promise((resolve, reject) => {
        URL.find({link_id: id}, {'_id' : 0, '__v': 0}, (err, obj) => {
          if (err) return console.log(err + "Cannot get obj by link id");
        //  console.log(test[0].link_id);

          resolve(obj);
        })
      })
    },

    saveLink(shortUrl){

      return new Promise((resolve, reject) => {
        shortUrl.save((err) => {
          if (err) return console.error(err);
          console.log("saved");
          resolve();
        });
      })
    }
}
