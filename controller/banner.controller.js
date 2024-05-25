const bannerServ = require("../services/banner.service");
const util = require("../utils/util");
const cloudinary = require("../utils/cloudinary");
module.exports = {
  create: async function (req, res) {
    let obj;
    if (req.file) {
      let bannerImg = await cloudinary.uploader.upload(req.file.path, function (err, result) {
        if (err) {
          return err;
        } else {
          return result;
        }
      });
      obj = { ...req.body , bannerImg:bannerImg.url };
    } else {
      obj = req.body;
    }
    let result = await bannerServ.create(obj);
    util.sendResponse(result, req, res);
  },
  getBanners: async function (req, res) {
    let result = await bannerServ.getBanners(req.body);
    util.sendResponse(result, req, res);
  },
  delete: async function (req, res) {
    let result = await bannerServ.delete(req.params.id);
    util.sendResponse(result, req, res);
  },
};
