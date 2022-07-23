const yelp = require('yelp-fusion');

const yelp_APIKEY = '';
const client = yelp.client(yelp_APIKEY);

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