var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/games", function (req, res) {
    db.Game.findAll().then(function (dbgame) {
      res.json(dbgame);
    });
  });

  // Create a new example
  app.post("/api/games", function (req, res) {
    db.Game.create(req.body).then(function (dbgame) {
      res.json(dbgame);
    });
  });

  // Delete an example by id
  app.delete("/api/games/:id", function(req, res) {
    db.Game.destroy({ where: { id: req.params.id } }).then(function(dbgame) {
      res.json(dbgame);
    });
  });
  app.put("/api/games/:id", function(req, res) {
    db.Game.update(
      {
        game_name: req.body.game_name,
        game_type: req.body.game_type
      },
      { 
        where:{
         id: req.params.id
        }
         
    }).then(function(dbgame) {
      res.json(dbgame);
    });
  });
};
{}