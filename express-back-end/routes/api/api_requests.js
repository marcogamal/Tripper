const { yelpKey } = require('../../config');
const yelp = require('yelp-fusion');
const client = yelp.client(yelpKey);

//Yelp Search
function yelpSearch(keyword) {
  return client.search({
    term: keyword,
    location: 'MONTREAL, QC',
    limit: 3,
  }).then(response => {
    return response.jsonBody;
  }).catch(e => {
    console.log(e);
  });
}

// console.log("yelpKey:", yelpKey);
// yelpSearch("burger")
//   .then((result) => console.log(result));

module.exports = { yelpSearch }