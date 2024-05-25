const mongoose = require("mongoose");

const bannerImgSchema = mongoose.Schema(
  {
    bannerImg : {
        type : String
    },
    category:{
        type : String
    },
  },
  { timestamps: { createdAt: "createdAt" } }
);

let BannerImg = mongoose.model("cartItem", bannerImgSchema);
module.exports = BannerImg;
