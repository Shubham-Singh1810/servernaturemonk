const Notification = require("../models/notification.model");
require("dotenv").config();
module.exports = {
  create: async function (body) {
    let result = {};
    try {
      result.data = await new Notification(body).save();
      result.message = "Notification added successfully";
    } catch (error) {
      result.message = error;
    }
    return result;
  },
  getNotifications: async function (body) {
    let result = {};
    try {
      result.data = await Notification.find({});
      result.message = "Notifiaction list fatched successfully";
    } catch (error) {
      result.message = error;
    }
    return result;
  },
  update: async function (id, query) {
    console.log(id, query)
    let result = {};
    try {
      result.data = await Notification.findByIdAndUpdate(id, query, { new: true });
      result.message = "Product updated successfully";
    } catch (error) {
      result.message = error;
    }
    return result;
  },
  delete: async function (id) {
    let result = {};
    try {
      result.data = await  Notification.findByIdAndDelete(id);
      result.message = "notification deleted  successfully";
    } catch (error) {
      result.message = error;
    }
    return result;
  },
};
