var unirest = require('unirest');
// These code snippets use an open-source library. http://unirest.io/nodej
 exports.getDef = unirest.get("https://montanaflynn-dictionary.p.mashape.com/define?word=irony")
.header("X-Mashape-Key","kGgEAjYyPQmshPTTUVOvwREtaRrcp1ZAtuSjsnB30CHwFIlaef")
.header("Accept", "application/json")
.end(function (result) {
// Notes for Ben
// this is the only place I can access "result" from
console.log(result.status, result.headers, result.body); 
});
