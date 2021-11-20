const mongoose = require("mongoose");

const CheckoutSchema = new mongoose.Schema({
  uniqueOrderNumber: String,
  trackingID: String,
  first_name: String,
  last_name: String,
  email_address: String,
  mobile: String,
  company_name: String,
  address_line_one: String,
  address_line_two: String,
  city: String,
  postcode: String,
  country: String,
  regionOrState: String,
  orderNotes: String,
});

CheckoutSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Checkout", CheckoutSchema);
