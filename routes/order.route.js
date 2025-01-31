const express = require("express");
const router= express.Router();
const orderController = require("../controller/order.controller");
const upload = require("../utils/multer")

router.route("/create").post(upload.single("paymentScreenShot"),orderController.create);
router.route("/getOrders").post(orderController.getOrders);
// router.route("/getOrder/:id").get(orderController.getOrderById);
// router.route("/update").put(orderController.update);
// router.route("/:id").delete(orderController.delete);

module.exports = router