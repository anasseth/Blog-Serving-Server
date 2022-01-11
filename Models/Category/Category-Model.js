const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  categoryName: String,
  routeURL: String,
  imageURL: String,
  pageTitle: String,
  pageDescription: String,
  pageKeyword: String,
  pageContent: String,
  showInSideMenu: Boolean,
  categoryType:String
});

CategorySchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Category", CategorySchema);
