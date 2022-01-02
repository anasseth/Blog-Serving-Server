const mongoose = require("mongoose");

const newsLetterSchema = new mongoose.Schema({
  email: String,
});

newsLetterSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("NewsLetter", newsLetterSchema);
