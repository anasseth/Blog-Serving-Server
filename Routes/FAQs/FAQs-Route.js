const express = require("express");
var router = express.Router();
const FAQController = require("../../Controllers/FAQs/FAQs-Controller");
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

router.get("/", FAQController.getAllFAQs);

router.post("/",[authToken.verifyToken], FAQController.newFAQs);

router.delete("/:id",[authToken.verifyToken], FAQController.deleteOneFAQs);

module.exports = router;
