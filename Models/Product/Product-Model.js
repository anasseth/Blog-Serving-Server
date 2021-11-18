const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  composition: String,
  category: String,
  tag: String,
  imageSrc: String,
  prescription: String,
  type: [
    {
      power: String,
      quantity: String,
      no_of_pills: String,
      price: String,
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
