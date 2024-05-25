const express = require("express");
const router= express.Router();
const productController = require("../controller/product.controller");
const upload = require("../utils/multer")

router.route("/create").post(upload.single("productHeroImg"), productController.create);
router.route("/getProducts").post(productController.getProducts);
router.route("/getProduct/:id").get(productController.getProductById);
router.route("/update").put(upload.single("productHeroImg"), productController.update);
router.route("/updateProductGallery").put(upload.single("productGallery"), productController.uploadProductInGaller);
router.route("/deletePicInGallery").put(productController.DeleteProductPicInGaller);
router.route("/updateProductVideo").put(upload.single("video"), productController.uploadProductVideo);
router.route("/deleteVideoInGallery").put(productController.DeleteProductVideoInGaller);
router.route("/:id").delete(productController.delete);

module.exports = router