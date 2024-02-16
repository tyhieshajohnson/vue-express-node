module.exports = (app) => {
  //app.post
  //connected to my frontend: authentication
  app.post("/register", (req, res) => {
    res.send({
      message: "Hello ${req.body.email}!, User was successfully registered",
    });
  });
};
