const Product = require("../models/product.model");
require("dotenv").config();
module.exports = {
  create: async function (body) {
    let result = {};
    try {
      result.data = await new Product(body).save();
      result.message = "Product added successfully";
    } catch (error) {
      result.message = error;
    }
    return result;
  },
  getProducts: async function (body) {
    let result = {};
    try {
      result.data = await Product.find(body.query).sort(body.sort).limit(body.limit).skip(parseInt(body.pageItem));
      result.message = "Product list fatched successfully";
      result.count = await Product.countDocuments(body.query);
    } catch (error) {
      result.message = error;
    }
    return result;
  },
  getProductById: async function (id) {
    let result = {};
    try {
      result.data = await Product.findOne({_id : id});
      result.message = "Product fatched successfully";
    } catch (error) {
      result.message = error;
    }
    return result;
  },
  update: async function (id, query) {
    let result = {};
    try {
      result.data = await Product.findByIdAndUpdate(id, query, { new: true });
      result.message = "Product updated successfully";
    } catch (error) {
      result.message = error;
    }
    return result;
  },
  delete: async function (id) {
    let result = {};
    try {
      result.data = await  Product.findByIdAndDelete(id);
      result.message = "Product Deleted successfully";
    } catch (error) {
      result.message = error;
    }
    return result;
  },
};
