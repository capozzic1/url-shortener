let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//makes a schema
let URLSchema = new Schema({
  original_url : { type: String, unique: true },
  link_id : { type: Number, unique: true },
  short_url : { type : String }
});

//make a model
let URL = module.exports =  mongoose.model('URL', URLSchema);

/*test.save(function(err, test){
  if (err) return console.error(err);

  console.log("saved");

});
*/

module.exports = {
    checkUrl(url){

      URL.find({original_url: url}, function(err, docs){
        if (err) return console.error(err);
        //if url is found, this is true, else false
        let truFal = docs.length > 0 ? true : false;
        console.log("trufal");
        return truFal;

      });


    }

};
