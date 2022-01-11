const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  name: String,
  keyword: String,
  pageDescription: String,
  pageTitle: String,
  urlParameter: String,
  bannerImageURL: String,
  writer: String,
  date: Date,
  heading: String,
  content: String,
  views:Number,
  likes:Number,
  category:String,
  type:String,
  comment: [
    {
      person_name: String,
      date: Date,
      comment: String,
      email:String,
      gender: String,
    },
  ],
});

blogSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Blog", blogSchema);
