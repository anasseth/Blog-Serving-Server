const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  uniqueOrderNumber: String,
  trackingID: String,
  checkout: String,
  totalCost: String,
  couponApplied: Boolean,
  couponCode: String,
  orderDate: String,
  orderStatus: String,
  paymentType: String,
  creditCardType: String,
  items: [
    {
      productName: String,
      quantity: String,
      price: String,
      category: String,
      pillType: {
        power: String,
        quantity: String,
        price_per_pills: String,
        our_price: String,
      },
    },
  ],
});

CartSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Cart", CartSchema);
