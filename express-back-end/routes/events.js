const express = require('express');
const router = express.Router();
const { yelpSearch } = require('./api/api_requests');

module.exports = function() {

  //GET request - Search event on Yelp!
  router.get('/', (req, res) => {
    yelpSearch(req.query)
      .then((data) => {
        console.log(data);
        res.send(data)
      })
      .catch((err) => {
        console.error(err);
        res.send(err);
      })
  })


  return router;
}