const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    message: {
      type: String,
    },
    ratting: {
      type: Number,
    },
    uploadImg: {
      type: String,
    },
    uploadVideo: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
  },
  { timestamps: { createdAt: "createdAt" } }
);

let Review = mongoose.model("activeOrder", reviewSchema);
module.exports = Review;
