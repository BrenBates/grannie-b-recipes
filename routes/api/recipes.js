const router = require("express").Router();
const recipesController = require("../../controllers/recipesController");

// Matches with "/api/blogs"
router.route("/")
  .get(recipesController.findAll)


  //Matches with "/api/houses/savehouse/:id"
// router.route("/savehouse/:id")
//   .post(housesController.savehouse)
//   .delete(housesController.deleteSavedHouse)

// Matches with "/api/houses/:id"
// router
//   .route("/:id")
//   .get(housesController.findById);


module.exports = router;