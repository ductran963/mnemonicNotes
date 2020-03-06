const router = require("express").Router();
const clientRoutes = require("./clients");

// Book routes
router.use("/clients", clientRoutes);

module.exports = router;