const express = require("express");
const router= express.Router();
const bannerController = require("../controller/banner.controller");
const upload = require("../utils/multer")

router.route("/create").post(upload.single("bannerImg"), bannerController.create);
router.route("/getBanners").post(bannerController.getBanners);
router.route("/:id").delete(bannerController.delete);

module.exports = router