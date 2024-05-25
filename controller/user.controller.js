const { reset } = require("nodemon");
const userServ = require("../services/user.service");
const util = require("../utils/util");
const multer = require("multer");
module.exports = {
  sendOtp: async function (req, res) {
    console.log(req.body)
    let result = await userServ.sendOtp(req.body);
    util.sendResponse(result, req, res);
  },
  verifyOtp: async function (req, res) {
    let result = await userServ.verifyOtp(req.body);
    util.sendResponse(result, req, res);
  },
  login: async function (req, res) {
    let result = await userServ.login(req.body);
    util.sendResponse(result, req, res);
  },
  removeTempUser: async function (req, res) {
    let result = await userServ.removeTempUser(req.params.id);
    util.sendResponse(result, req, res);
  },
  update: async function (req, res) {
    let result = await userServ.update(req.body);
    util.sendResponse(result, req, res);
  },
  updateProfileImg: async function (req, res) {
    let profileImg = process.env.API_BASE_URL+req.file.path
    let obj ={
        _id : req.body._id,
        profileImg: profileImg
    }
    let result = await userServ.update(obj);
    util.sendResponse(result, req, res);
  },
  contact: async function (req, res) {
    let result = await userServ.contact(req.body);
    util.sendResponse(result, req, res);
  },
  getUserById: async function (req, res) {
    let result = await userServ.getUserById(req.params.id);
    util.sendResponse(result, req, res);
  },
  getUsers: async function (req, res) {
    let result = await userServ.getUsers();
    util.sendResponse(result, req, res);
  },
  getMegaResult: async function (req, res) {
    let result = await userServ.getMegaResult();
    util.sendResponse(result, req, res);
  },
  addToCart: async function (req, res) {
    let result = await userServ.addToCart(req.body);
    util.sendResponse(result, req, res);
  },
};
