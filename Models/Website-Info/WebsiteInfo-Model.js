const mongoose = require("mongoose");

const websiteInfoSchema = new mongoose.Schema({
  email: String,
  pinterest: String,
  facebook: String,
  youtube: String,
  linkedin: String,
  phoneNumber: String,
  googleMapLink: String,
  address: String,
  timingSet: String,
});

websiteInfoSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("WebsiteInfo", websiteInfoSchema);
