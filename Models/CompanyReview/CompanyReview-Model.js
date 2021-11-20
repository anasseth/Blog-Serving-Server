const mongoose = require("mongoose");

const companyReviewSchema = new mongoose.Schema({
  name: String,
  reviewText: String,
  starRating: String,
  featureOnWall: Boolean,
});

companyReviewSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("CompanyReview", companyReviewSchema);
