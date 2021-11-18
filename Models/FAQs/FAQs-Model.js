const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

faqSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("FAQs", faqSchema);
