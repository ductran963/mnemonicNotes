const router = require("express").Router();
const clientController = require("../../controllers/clientsController");

// Matches with "/api/clients"
router.route("/")
  .get(clientController.findAll)
  .post(clientController.create);

// Matches with "/api/clients/:id"
router
  .route("/:id")
  .get(clientController.findById)
  .put(clientController.update)
  .delete(clientController.remove);

module.exports = router;