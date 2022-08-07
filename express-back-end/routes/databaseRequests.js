module.exports = function (router, database) {
  // Get User Info
  router.get("/", (req, res) => {
    // let userId = Number(req.cookies["userId"]);
    // console.log(userId);
    let userId = 1;
    database
      .getUserInfo(userId)
      .then((user) => res.send({ user }))
      .catch((e) => {
        res.send(e);
      });
  });

  // Get User Plans
  router.get("/plans", (req, res) => {
    // let userId = Number(req.cookies["userId"]);
    // console.log(userId);
    let userId = 1;
    database
      .getPlansForUser(userId)
      .then((plan) => res.send({ plan }))
      .catch((e) => {
        res.send(e);
      });
  });

  // Get Events For Plan
  router.get("/plans/:planId", (req, res) => {
    // let userId = Number(req.cookies["userId"]);
    // console.log(userId);
    // let userId = 1;
    let planId = req.params.planId;
    database
      .getEventsForPlan(planId)
      .then((event) => res.send({ event }))
      .catch((e) => {
        res.send(e);
      });
  });

  // Add New Event to Plan
  router.put("/plans/:planId", (req, res) => {
    let planId = req.params.planId;
    const newEvent = req.body.event;
    console.log("newEvent: ", newEvent);
    database
      .addEventToPlan(planId, newEvent)
      .then((event) => res.send({ event }))
      .catch((e) => {
        res.send(e);
      });
  });

  // Remove an Event from the database
  router.delete("/events/:eventId", (req, res) => {
    let eventId = req.params.eventId;
    console.log("in delete route");

    database.deleteEvent(eventId).then(() => {
      console.log("Event deleted!");
    });
  });

  router.get("/events/:eventId", (req, res) => {
    let eventId = req.params.eventId;

    database.getEventById(eventId).then((event) => {
      res.send({ event });
    });
  });
};
