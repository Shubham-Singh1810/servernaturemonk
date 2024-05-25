const express = require("express");
const router= express.Router();
const notificationController = require("../controller/notification.controller");

router.route("/create").post(notificationController.create);
router.route("/getNotification").get(notificationController.getNotifications);
router.route("/update").put(notificationController.update);
router.route("/:id").delete(notificationController.delete);

module.exports = router