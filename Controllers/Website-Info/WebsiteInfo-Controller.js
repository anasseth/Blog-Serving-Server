const WebsiteInfo = require("../../Models/Website-Info/WebsiteInfo-Model");

const getWebsiteInfo = (req, res, next) => {
  WebsiteInfo.find({}).then((info) => {
    res.json(info);
  });
};

const newWebsiteInfo = (req, res, next) => {
  const body = req.body;
  console.log(req.body);
  if (
    body.email == undefined ||
    body.phoneNumber == undefined ||
    body.address == undefined
  ) {
    return res.status(400).json({ error: "Content Missing" });
  }
  const webInfoObject = new WebsiteInfo({
    email: body.email,
    pinterest: body.pinterest,
    facebook: body.facebook,
    youtube: body.youtube,
    linkedin: body.linkedin,
    phoneNumber: body.phoneNumber,
    googleMapLink: body.googleMapLink,
    address: body.address,
    timingSet: body.timingSet,
  });

  console.log(body);
  console.log(webInfoObject);

  webInfoObject.save().then((saveWebInfo) => {
    res.json(saveWebInfo);
  });
};

const updateWebsiteInfo = (request, response, next) => {
  const body = request.body;

  const updatedWebsiteInfo = {
    email: body.email,
    pinterest: body.pinterest,
    facebook: body.facebook,
    youtube: body.youtube,
    linkedin: body.linkedin,
    phoneNumber: body.phoneNumber,
    googleMapLink: body.googleMapLink,
    address: body.address,
    timingSet: body.timingSet,
  };

  WebsiteInfo.findByIdAndUpdate(request.params.id, updatedWebsiteInfo, {
    new: true,
  })
    .then((updatedWebsiteInfoObject) => {
      response.json(updatedWebsiteInfoObject);
    })
    .catch((error) => next(error));
};

//export controller functions
module.exports = {
  getWebsiteInfo,
  newWebsiteInfo,
  updateWebsiteInfo,
};
