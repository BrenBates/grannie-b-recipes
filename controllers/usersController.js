const db = require("../models");

// Defining methods for the housesController
module.exports = {

  pullUserFavorites: function(req, res) {
    console.log('pull user favorites');

      db.User
        .find({})
        .sort({date:-1})
        .then(dbModel => {res.json(dbModel)})
        .catch(err => res.status(422).json(err));
  

    },

    createUserFavorite: function(req,res) {
        console.log('create user favorite')
        console.log(req.body)
    
        // db.User
        // .findOne(req.body)
        // .then(dbModel => res.json(dbModel))
        // .catch(err => {
        //   res.send('error: ' + err)
        // })
      
      }
 

};