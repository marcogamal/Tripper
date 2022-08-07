const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
});

const getUserInfo = (userId) => {
  let queryString = `SELECT * FROM users
  WHERE users.id = $1;`;
  let queryParams = [userId];

  return pool
    .query(queryString, queryParams)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.getUserInfo = getUserInfo;

const getPlansForUser = (userId) => {
  let queryString = `SELECT * FROM plans
  WHERE plans.id = $1`;
  let queryParams = [userId];

  return pool
    .query(queryString, queryParams)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.getPlansForUser = getPlansForUser;

const getEventsForPlan = (planId) => {
  let queryString = `SELECT * FROM events
  WHERE events.plan_id = $1`;
  let queryParams = [planId];

  return pool
    .query(queryString, queryParams)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.getEventsForPlan = getEventsForPlan;

// Add Event to Plan
const addEventToPlan = (planId, newEvent) => {
  let queryString = `INSERT INTO events (id, plan_id, name, description, image, lat, lng, date_time, street_address) VALUES ($2, $1, $3, $4, $5, $6, $7, NOW(), $8);`;
  let queryParams = [
    newEvent.id,
    planId,
    newEvent.name,
    newEvent.alias,
    newEvent.url,
    newEvent.coordinates.lat,
    newEvent.coordinates.lng,
    newEvent.location.address,
  ];

  return pool
    .query(queryString, queryParams)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.addEventToPlan = addEventToPlan;

// Delete Event From Database
const deleteEvent = (eventId) => {
  let queryString = `DELETE FROM events WHERE id = $1;`;
  let queryParams = [eventId];

  return pool
    .query(queryString, queryParams)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.deleteEvent = deleteEvent;
