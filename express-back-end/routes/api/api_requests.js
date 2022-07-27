const { yelpKey } = require('../../config');
const yelp = require('yelp-fusion');
const client = yelp.client(yelpKey);

//Yelp Search
function yelpSearch(keyword) {
  console.log("on yelpSearch...");
  return client.search({
    term: keyword,
    location: 'MONTREAL, QC',
    limit: 1,
  }).then(res => {
    return res.jsonBody;
  }).catch(e => {
    console.log(e);
  });
}

// console.log("yelpKey:", yelpKey);
// yelpSearch("burger")
//   .then((result) => console.log(result));

module.exports = { yelpSearch }