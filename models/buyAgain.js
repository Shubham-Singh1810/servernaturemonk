const mongoose = require("mongoose");

const buyAgainSchema = mongoose.Schema(
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

let BuyAgain = mongoose.model("cartItem", buyAgainSchema);
module.exports = BuyAgain;
