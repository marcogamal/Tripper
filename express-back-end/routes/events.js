const express = require('express');
const router = express.Router();
const { yelpSearch } = require('./api/api_requests');

module.exports = function() {

  //GET
  router.get('/', (req, res) => {
    yelpSearch()
      .then((data) => {
        res.send("Please type something...")
      })
      .catch((err) => {
        console.error(err);
        res.send(err);
      })
  })


  //GET request - Search event on Yelp!
  router.get('/:keyword/:location', (req, res) => {
    const keyword = req.params.keyword;
    const location = req.params.location;

    yelpSearch(keyword, location)
      .then((data) => {
        console.log(data.businesses[0].name);
        res.send(data.businesses[0])
      })
      .catch((err) => {
        console.error(err);
        res.send(err);
      })
  })


  return router;
}