const express = require("express");
const router= express.Router();
const orderController = require("../controller/order.controller");


router.route("/create").post(orderController.create);
router.route("/getOrders").post(orderController.getOrders);
// router.route("/getOrder/:id").get(orderController.getOrderById);
// router.route("/update").put(orderController.update);
// router.route("/:id").delete(orderController.delete);

module.exports = router