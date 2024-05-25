const Order = require("../models/order.model");
const Product = require("../models/product.model");
const User = require("../models/user.model")
require("dotenv").config();
const nodemailer = require("nodemailer");
module.exports = {
  create: async function (body) {
    let result = {};
    try {
      result.data = await new Order(body).save();
      result.message = "Order placed successfully";
      let user = await User.findOne({_id: body.userId})
      let product = await Product.findOne({_id: body.productId});
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: "hittheshubham1810@gmail.com", // generated ethereal user
          pass: "eqauulfefeodhxel", // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
      let mailOption = {
        from: body.email,
        to: "hittheshubham1810@gmail.com",
        subject: "You recived an order",
        text: `${user.fullName} has placed an order for ${product.title} and quantity is ${body.quantity} , mode of payment is ${body.paymentMethod} and the subtotal amout is ${body.subTotal}`,
      };
      transporter.sendMail(mailOption, async (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log(info.response);
        }
      });
    } catch (error) {
      result.message = error;
    }
    return result;
  },
  getOrders: async function (query) {
    console.log(query)
    let result = {};
    try {
      result.data = await Order.find(query).populate({path:"userId"}).populate({path:"productId"});
      result.message = "Order List featched successfully"
    } catch (error) {
      result.message = error;
    }
    return result;
  },
  // delete: async function (id) {
  //   let result = {};
  //   try {
  //     result.data = await  Banner.findByIdAndDelete(id);
  //     result.message = "Banner deleted successfully";
  //   } catch (error) {
  //     result.message = error;
  //   }
  //   return result;
  // },
};
