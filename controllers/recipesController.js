const db = require("../models");

// Defining methods for the housesController
module.exports = {

  pullRecipes: function(req, res) {
    console.log('pull Recipes');

    if(!req.query.value) {
      db.Recipe 
        .find({})
        .sort({date:-1})
        .then(dbModel => {res.json(dbModel)})
        .catch(err => res.status(422).json(err));
    } else {

    db.Recipe
      .find({
        category: req.query.value
      })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

    }
  },
  pullRecipeByID: function(req, res) {
    console.log('pull Recipes by ID');

    db.Recipe
      .findById(req.params.id)
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
  
  },

  deleteRecipe: function(req,res) {
    console.log('deleting recipe')
    console.log(req.query.recipeID)
    db.Recipe
      .deleteOne({"_id": req.query.recipeID})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  updateRecipe: function(req,res) {

    //if update is for ingredients

    if(req.body.ingredients) {

      db.Recipe.findOneAndUpdate(
        {_id: req.body.recipeID},
        {ingredients: req.body.ingredients}
        )
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err))

    }

     //if update is for instructions

     if(req.body.instructions) {

      db.Recipe.findOneAndUpdate(
        {_id: req.body.recipeID},
        {instructions: req.body.instructions}
        )
      .then(dbRecipe => console.log(dbRecipe))
      .catch(err => res.status(422).json(err))

    }

     
    
   
    
  }

};