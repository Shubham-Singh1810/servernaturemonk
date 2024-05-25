const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true
    },
  },
  { timestamps: { createdAt: "createdAt" } }
);

let Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;
