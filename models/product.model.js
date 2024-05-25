const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    subTitle: {
      type: String,
    },
    price: {
      type: Number,
    },
    ratting: {
      type: Number,
    },
    discription: {
      type: String,
    },
    category: {
      type: String,
    },
    subCategory: {
      type: String,
    },
    productHeroImg: {
      type: String,
    },
    productGallery: [{
      type: String,
    }],
    quantity: {
      type: String,
    },
    video :[{
      type : String
    }]
  },
  { timestamps: { createdAt: "createdAt" } }
);

let Product = mongoose.model("products", productSchema);
module.exports = Product;
