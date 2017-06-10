const urlRegex = require('url-regex');

function testUrl(url){

return urlRegex({exact: true, strict: false}).test(url);
  //let test2 = url.includes("http") || url.includes("https");

}

module.exports = testUrl;
