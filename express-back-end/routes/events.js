const express = require('express');
const router = express.Router();
const { getSearch } = require('./api/api_requests');

module.exports = function() {

  //GET
  router.get('/', (req, res) => {
    getSearch()
      .then((data) => {
        res.send("Please type something...")
      })
      .catch((err) => {
        console.error(err);
        res.send(err);
      })
  })


  //GET request - Search event on Yelp!
  router.get('/:keyword/:location',async (req, res) => {
    const keyword = req.params.keyword;
    const location = req.params.location;

    try {
      const data = await getSearch(keyword, location);   

      res.send(data.businesses)

    } catch (error) {
      res.send(error)
    }
  })


  return router;
}