const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your product name"],
  },
  description: {
    type: String,
    required: [true, "Please enter your product description"],
  },
  category: {
    type: String,
    required: [true, "Please enter your product category"],
  },
  tags: {
    type: String,
  },
  originalPrice: {
    type: Number,
    required: [true, "Please enter your oiginal price"],
  },
  discountPrice: {
    type: Number,
  },
  stock: {
    type: Number,
    required: [true, "Please enter your stock number"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  reviews: [
    {
      name: {
        type: Object,
      },
      comment: {
        type: String,
      },
      productID: {
        type: String,
      },
      createdAt : {
        type: Date,
        default: Date.now()
      }
    },
  ],
  ratings : {
    type: Number,
  },
  shopId: {
    type: String,
    required: true
  },
  shop : {
    type: Object,
    required: true
  },
  sold_out: {
    type: Number,
    default: 0
  },
  createdAt :{
    type: Date,
    default: Date.now()
  }

});

module.exports = mongoose.model("Product", productSchema);
