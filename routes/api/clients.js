// const express = require('express');
const clientsController = require('../../controllers/clientsController');
const router = require("express").Router();
// const router = new express.Router();

// Matches with "/api/clients"
router.route("/")
.get(clientsController.findAll)
.post(clientsController.create);
 
router.route("/clientform")
.post(clientsController.create)
.get(clientsController.findAll);

// Matches with "/api/clients/:id"
router
  .route("/:id")
  .get(clientsController.findById)
  .put(clientsController.update)
  .delete(clientsController.remove);

module.exports = router;