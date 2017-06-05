const urlRegex = require('url-regex');

function testUrl(url){
  return urlRegex({exact: true, strict: false}).test(url);
}

module.exports = testUrl;
