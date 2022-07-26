// config.js
require('dotenv').config();

module.exports = {
  yelpKey: process.env.YELP_APIKEY,
  port: process.env.PORT
};