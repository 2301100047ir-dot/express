const request = require('request');
request('https://api.thedogapi.com/v1/images/search', function (error, response, body) {
if (!error && response.statusCode == 200) {
const data = JSON.parse(body);
console.log(body);
const dogImageUrl = data[0].url;
console.log(dogImageUrl);
}
});