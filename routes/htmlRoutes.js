var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Game.findAll({}).then(function() {
      res.render("index", {
        msg: "Welcome!",
        
      });
    });
  });

  // index route loads view.html
  app.get("/news", function(req, res) {
    res.render("news");
  });
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  app.get("/gamesplayed", function(req, res) {
    res.render("gamesplayed");
  });
  app.get("/add", function(req, res) {
    res.render("add");
  });
  app.get("/previews", function(req, res) {
    res.render("previews");
  });
  app.get("/edit", function(req, res) {
    res.render("edit");
  });




  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Game.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
       
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
