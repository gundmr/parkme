const router = require("express").Router();
const rentalController = require("../../controllers/rentalController");

// Matches with "/api/rentals"
router.route("/")
  .get(rentalController.findAll)
  .post(rentalController.create);

// Matches with "/api/rentals/:id"
router
  .route("/:id")
  .get(rentalController.findById)
  .put(rentalController.update)
  .delete(rentalController.remove);

module.exports = router;