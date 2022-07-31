const { yelpKey } = require('../../config');
const yelp = require('yelp-fusion');
const client = yelp.client(yelpKey);

//Yelp Search
function yelpSearch(keyword, location) {
  // console.log("on yelpSearch...", keyword);
  return client.search({
    term: keyword,
    location: location,
    limit: 3,
  }).then(res => {
    return res.jsonBody;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = { yelpSearch }