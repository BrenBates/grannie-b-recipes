const router = require("express").Router();
const recipeRoutes = require("./recipes");
const blogRoutes = require("./blogs");
const userRoutes = require("./users");

// Routes
router.use("/recipes", recipeRoutes);
router.use("/blogs", blogRoutes);
router.use("/users", userRoutes);


module.exports = router;
