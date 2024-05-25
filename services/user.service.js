const User = require("../models/user.model");
const UserOtp = require("../models/userOtp.model");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const Product = require("../models/product.model");
const Order = require("../models/order.model");
const { query } = require("express");
// const Post = require("../models/post.model");
require("dotenv").config();
module.exports = {
  sendOtp: async function (body) {
    let otp = Math.floor(Math.random() * 100000) + 100000;
    let obj = {
      email: body.email,
      password: body.password,
      fullName: body.fullName,
      otp: otp,
    };
    let result = {};
    let tempUser = await UserOtp.findOne({ email: body.email });
    if (tempUser) {
      result.message = "This email is already registered";
    } else {
      try {
         await new UserOtp(obj).save();
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
          from: "hittheshubham1810@gmail.com",
          to: body.email,
          subject: "Email verification for Nature Monk",
          text: `Your OTP for email verification is ${otp}`,
        };
        transporter.sendMail(mailOption, async (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log(info.response);
          }
        });
        result.message = "Otp has been sent to the given email address";
      } catch (error) {
        result.err = error;
      }
    }
    return result;
  },
  verifyOtp: async function (body) {
    let result = {};
    try {
      let tempUser = await UserOtp.findOne(body);
      if (tempUser) {
        let obj = {
          email: tempUser.email,
          password: tempUser.password,
          fullName: tempUser.fullName,
        };
        await new User(obj).save();
        result.message = "User verified successfully";
      } else {
        result.message = "Incorrect otp";
      }
    } catch (error) {
      result.message = error;
    }
    return result;
  },
  login: async function (body) {
    let result = {};
    try {
      logedUser = await User.findOne(body).populate({path:"cartItem"}).select("-password");
      if (logedUser != null) {
        result.data = logedUser;
        result.token = await jwt.sign({ logedUser }, process.env.JWT_KEY);
        result.message = "NatureNonk welcomes You :)";
      } else {
        result.message = "Invalid login details";
      }
    } catch (error) {
      result.err = error;
    }
    return result;
  },
  removeTempUser: async function (id) {
    let result = {};
    try {
      result.data = await UserOtp.findByIdAndDelete(id);
    } catch (error) {
      result.err = error;
    }
    return result;
  },
  update: async function (body) {
    let result = {};
    try {
      result.data = await User.findByIdAndUpdate(body._id, { $set: body }, { new: true });
      result.message = "User Updated Successfully";
    } catch (error) {
      result.err = error;
    }
    return result;
  },
  getUserById: async function (id) {
    let result = {};
    try {
      result.data = await User.findOne({ _id: id });
      result.message = "User data fatched successfully";
    } catch (error) {
      result.err = error;
    }
    return result;
  },
  getUsers: async function (req) {
    let result = {};
    try {
      result.data = await User.find({});
      result.message = "User list fatched successfully";
    } catch (error) {
      result.err = error;
    }
    return result;
  },
  getMegaResult: async function () {
    let count = {};
    try {
      count.user = await User.countDocuments({});
      count.product = await Product.countDocuments({});
      count.active = await Order.countDocuments({ status: "active" });
      count.delevered = await Order.countDocuments({ status: "delevered" });
    } catch (error) {
      count.err = error;
    }
    console.log(count);
    return count;
  },
  addToCart: async function (body) {
    let result ={};
    let query;
    const user = await User.findOne({ _id: body.userId });
    if (!user) {
      result.message="User not found"
    }
    else{
      if (user.cartItem.includes(body.productId)) {
        query = { $pull: { cartItem: body.productId } };
        result.message = "Removed From Cart";
      } else {
        query = { $push: { cartItem: body.productId } };
        result.message = "Added To Cart";
      }
    }
     await User.findByIdAndUpdate({_id: body.userId}, query);
     result.data =await User.findOne({_id : body.userId}).populate({path :"cartItem"})
    return result;
  },
  contact: async function (body) {
    let result = {};
    try {
      result.message = "We have recived your message and come back to you soon:)";
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
        subject: body.name+" wants to connect you",
        text: `${body.name} sends you message , subject : ${body.subject} , phone number : ${body.phoneNumber} and messages : ${body.message} `,
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
};
