
function linkGen(){
  let num = Math.floor((Math.random() * 900000) + 1);
    return num.toString().substring(0, 4);
}

module.exports = linkGen;
