const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/blogs"
// router.route("/")
//   .get(recipesController.pullRecipes)
//   .post(recipesController.createRecipe)

  //Matches with "/api/houses/savehouse/:id"
router.route("/favorites")
  .get(usersController.pullUserFavorites)
  .post(usersController.createUserFavorite)

// Matches with "/api/houses/:id"
// router
//   .route("/:id")
//   .get(housesController.findById);


module.exports = router;