const express = require('express');
const router = express.Router();
const { yelpSearch } = require('./api/api_requests');

module.exports = function() {

  //GET anything
  router.get('/', (req, res) => {
    yelpSearch()
      .then((data) => {
        console.log(data.businesses[0].name);
        res.send(data.businesses[0].name)
      })
      .catch((err) => {
        console.error(err);
        res.send(err);
      })
  })


  //GET request - Search event on Yelp!
  router.get('/:keyword', (req, res) => {
    const keyword = req.params.keyword;
    yelpSearch(keyword)
      .then((data) => {
        console.log(data.businesses[0].name);
        res.send(data.businesses[0].name)
      })
      .catch((err) => {
        console.error(err);
        res.send(err);
      })
  })


  return router;
}