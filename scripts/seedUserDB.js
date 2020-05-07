const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://user:password1@ds335678.mlab.com:35678/heroku_cbgws70t"
);

const userSeed = [
  {
    email: "I first made these rolls when I was 20 years old, living in a van down by the river.",
    recipe: "1. make da rolls.  2. eat da rolls.",
   
  },
  {
    background: "i like pizza.",
    recipe: "1. make da pizza. 2. eat da pizza",
    date: new Date(Date.now())
  }
  
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(recipeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
