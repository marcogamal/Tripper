const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const { yelpKey } = require('./config');
const cors = require("cors");
const PORT = process.env.PORT || 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

App.use(cors());

// Configuring Routes
const eventsRoutes = require("./routes/events");
App.use("/api/events", eventsRoutes());

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

// Listening
App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

