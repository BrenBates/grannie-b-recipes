const router = require("express").Router();
const recipesController = require("../../controllers/recipesController");

// Matches with "/api/blogs"
router.route("/")
  .get(recipesController.pullRecipes)
  .post(recipesController.createRecipe)


  //Matches with "/api/houses/savehouse/:id"
router.route("/:id")
  .get(recipesController.pullRecipeByID)

// Matches with "/api/houses/:id"
// router
//   .route("/:id")
//   .get(housesController.findById);


module.exports = router;