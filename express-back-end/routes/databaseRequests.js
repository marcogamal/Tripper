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
  router.post("/plans/:planId", (req, res) => {
    let planId = req.params.planId;
    const newEvent = req.body.event;
    database
      .addEventToPlan(planId, req.body.event)
      .then((event) => res.send({ event }))
      .catch((e) => {
        res.send(e);
      });
  });

  // Remove an Event from the database
  router.delete("/api/users/events/:eventId", (req, res) => {
    let eventId = req.params.eventId;

    database.deleteEvent(eventId).then(() => {
      console.log("Event deleted!");
    });
  });
};
