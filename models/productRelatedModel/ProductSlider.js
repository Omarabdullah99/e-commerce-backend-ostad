const mongoose = require("mongoose");

const ProductSliderSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    des: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    productID: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

const ProductSliderModel = mongoose.model(
  "productSliders",
  ProductSliderSchema
);

module.exports = ProductSliderModel;
