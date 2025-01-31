const orderServ = require("../services/order.service");
const util = require("../utils/util");
const cloudinary = require("../utils/cloudinary");
module.exports = {
  create: async function (req, res) {
    console.log(req?.body)
    let obj;
        if (req.file) {
          let paymentScreenShot = await cloudinary.uploader.upload(req.file.path, function (err, result) {
            if (err) {
              return err;
            } else {
              return result;
            }
          });
          obj = { ...req.body , paymentScreenShot:paymentScreenShot.url };
        } 
    let result = await orderServ.create(obj);
    util.sendResponse(result, req, res);
  },
  getOrders: async function (req, res) {
    console.log(req.body)
    let result = await orderServ.getOrders(req.body);
    util.sendResponse(result, req, res);
  },
  // getOrderById: async function (req, res) {
  //   let result = await notificationServ.getNotifications(req.body);
  //   util.sendResponse(result, req, res);
  // },
  // update: async function (req, res) {
  //   let result = await notificationServ.update(req.body._id, req.body);
  //   util.sendResponse(result, req, res);
  // },
  // delete: async function (req, res) {
  //   let result = await notificationServ.delete(req.params.id);
  //   util.sendResponse(result, req, res);
  // },
};
