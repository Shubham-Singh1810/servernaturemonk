const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
    },
    role:{
      type : String,
    },
    password: {
      type: String,
    },
    fullName: {
      type: String,
    },
    profileImg: {
      type: String,
    },
    address: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
    status:{
      type : String,
    },
    pincode: {
      type: Number,
    },
    activeOrder: [
      {
        type: String,
      },
    ],
    cartItem: [{ type: mongoose.Schema.Types.ObjectId, ref: "products" }],
  },
  { timestamps: { createdAt: "createdAt" } }
);

let User = mongoose.model("users", userSchema);
module.exports = User;
