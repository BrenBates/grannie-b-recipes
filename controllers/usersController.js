const db = require("../models");

// Defining methods for the housesController
module.exports = {

  pullUserFavorites: function(req, res) {

    //This function runs when the recipe detail page is first loaded up with an active user.
    //It sets into the state a true or false value if that recipe is one of the users favorites.

    console.log(req.query)

    db.User.findOne({
      email: req.query.userEmail 
    })
        .then(dbModel => {
         
          console.log(dbModel.Recipe.length)
         
          let fav = false;


          for(let i=0; i < dbModel.Recipe.length; i++) {

           let recipeQuery = req.query.recipeID
           let recipeDB = dbModel.Recipe[i].toString()

          console.log(recipeQuery)
          console.log(recipeDB)
        
            if(recipeDB == recipeQuery) {
             
              console.log('hello')
              fav=true;

            }
          }
    
          res.send(fav)


        })
        .catch(err => res.status(422).json(err));
  

    },

    handleUserFavorite: function(req,res) {
        console.log('handling user favorite')
        console.log(req.body)


        db.User.findOne({
          email: req.body.userEmail 
        })
          .then(function(dbUser) {

            console.log('this is the dbUser')
            console.log(dbUser)

             //If a user is not found, need to create that user and go ahead and add the new favorite recipe.

            if(!dbUser) {

              db.User.create({
                email: req.body.userEmail,
                Recipe: req.body.recipeID
              })
               .then(newUser => {res.send(true)})
               .catch(err => res.status(422).json(err));

            }

            //If a user is found and it is not already a favorite.  Need to add to favorites and return a true.

            if(dbUser && req.body.favorite===false) {

              db.User.updateOne({
                dbUser,
                $push: {Recipe: req.body.recipeID}
              })
              .then(res.send(true))

            }

             //If a user is found and it is already a favorite.  Need to remove from favorites and return a false

            if(dbUser && req.body.favorite===true) {

              console.log('here')

              db.User.updateOne({
                dbUser,
                $pull: {Recipe: req.body.recipeID}
              })
                .then(res.send(false))

            }

          })
    
        // db.User
        // .findOne(req.body)
        // .then(dbModel => res.json(dbModel))
        // .catch(err => {
        //   res.send('error: ' + err)
        // })
      
      },

      favoritesPage: function(req,res) {
        console.log('handling favorites page')
        console.log(req.query)

        db.User.findOne({
          email: req.query.userEmail 
        })
          .populate("Recipe")
          .then(function(dbUser) {
            
            console.log(dbUser)
            res.send(dbUser.Recipe)

          }).catch(err => res.status(422).json(err));



      }
 

};