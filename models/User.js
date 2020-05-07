const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const schemaRecipe = new Schema( 
    {
        email: {type: String, required: true},
        favRecipes: [{type: String}]
    }
);

const User = mongoose.model("User", schemaRecipe);

module.exports = User;