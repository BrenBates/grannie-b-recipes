const router = require("express").Router();
const recipeRoutes = require("./recipes");
const blogRoutes = require("./blogs");

// Routes
router.use("/recipes", recipeRoutes);
router.use("/blogs", blogRoutes);


module.exports = router;
