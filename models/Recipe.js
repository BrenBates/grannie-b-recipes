const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const schemaRecipe = new Schema( 
    {
        background: {type: String},
        recipe: {type: String, required: true},
        date: {type: Date, default: Date.now}
    }
);

const Recipe = mongoose.model("Recipe", schemaRecipe);

module.exports = Recipe;