const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const priceSchema = new Schema(
  {
    itemId: {
      type: String,
      required: true,
    },
    dates: [
      {
        type: String,
        required: true,
      },
    ],
    price: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("price", priceSchema);
