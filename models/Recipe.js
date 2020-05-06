const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const schemaRecipe = new Schema( 
    {
        title: {type: String, required: true},
        category: {type: String, required: true},
        ingredients: {type: String, required: true},
        instructions: {type: String, required: true},
        background: {type: String},
        submitter: {type: String, required: true},
        date: {type: Date, default: Date.now},
        recipeImageURL: {type: String, default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg'}
    }
);

const Recipe = mongoose.model("Recipe", schemaRecipe);

module.exports = Recipe;