const { yelpKey } = require('../../config');
const yelp = require('yelp-fusion');
const client = yelp.client(yelpKey);

//Yelp Search
function getSearch(keyword, location) {
  return client.search({
    term: keyword,
    location: location,
    limit: 5,
  }).then(res => {
    return res.jsonBody;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = { getSearch }