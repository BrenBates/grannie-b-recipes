const db = require("../models");

// Defining methods for the housesController
module.exports = {

  findAll: function(req, res) {
    console.log('houses findAll');
    db.Recipe
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createRecipe: function(req,res) {
    console.log('create recipe')
    console.log(req.body)
    db.Recipe.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => {
      res.send('error: ' + err)
    })
  
  }

};