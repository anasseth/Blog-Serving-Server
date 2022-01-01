const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  composition: String,
  category: String,
  tag: String,
  imageURLID: String,
  featureProduct: Boolean,
  prescription: String,
  type: String,
  typesOfPill: [
    {
      power: String,
      quantity: String,
      price_per_pills: String,
      our_price: String,
    },
  ],
});

productSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Product", productSchema);
