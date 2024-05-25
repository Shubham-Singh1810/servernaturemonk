const express = require("express");
const router= express.Router();
const userController = require("../controller/user.controller")
const imgUpload = require("../utils/multer")

router.route("/sendOtp").post(userController.sendOtp);
router.route("/verifyOtp").post(userController.verifyOtp);
router.route("/login").post(userController.login);
router.route("/update").put(userController.update);
router.route("/updateProfileImg").put(imgUpload.single("profileImg"),userController.updateProfileImg);
router.route("/contact").post(userController.contact);
router.route("/getUser/:id").get(userController.getUserById);
router.route("/getUsers").get(userController.getUsers);
router.route("/removeTempUser/:id").delete(userController.removeTempUser);
router.route("/getMegaResult/").get(userController.getMegaResult);
router.route("/addToCart/").post(userController.addToCart)


module.exports = router