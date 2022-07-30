module.exports = function (router, database) {
  // Get User Info
  router.get("/users", (req, res) => {
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
};
