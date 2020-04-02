const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const schemaBlog = new Schema( 
    {
        background: {type: String},
        recipe: {type: String, required: true},
        date: {type: Date, default: Date.now}
    }
);

const Blog = mongoose.model("Blog", schemaBlog);

module.exports = Blog;