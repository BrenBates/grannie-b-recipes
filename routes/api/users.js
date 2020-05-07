const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/blogs"
// router.route("/")
//   .get(recipesController.pullRecipes)
//   .post(recipesController.createRecipe)

  //Matches with "/api/houses/savehouse/:id"
router.route("/favorites")
  .get(usersController.pullUserFavorites)
  .post(usersController.handleUserFavorite)

router.route("/favoritespage")
  .get(usersController.favoritesPage)

// Matches with "/api/houses/:id"
// router
//   .route("/:id")
//   .get(housesController.findById);


module.exports = router;