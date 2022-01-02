const mongoose = require("mongoose");

const customerQuerySchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  query: String,
});

customerQuerySchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("customerQuery", customerQuerySchema);
