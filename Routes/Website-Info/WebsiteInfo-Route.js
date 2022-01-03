const express = require("express");
var router = express.Router();
const WebsiteInfoController = require("../../Controllers/Website-Info/WebsiteInfo-Controller");
router.use(express.static("build"));
const authToken = require('../../Middleware/authToken');

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

router.use(requestLogger);

router.get("/", WebsiteInfoController.getWebsiteInfo);

router.post("/",[authToken.verifyToken], WebsiteInfoController.newWebsiteInfo);

router.put("/:id",[authToken.verifyToken], WebsiteInfoController.updateWebsiteInfo);

module.exports = router;
