const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const schemaRecipe = new Schema( 
    {
        email: {type: String, required: true},
        Recipe: [{
            type: Schema.Types.ObjectId,
            ref: "Recipe"    
        }]
    }
);

const User = mongoose.model("User", schemaRecipe);

module.exports = User;