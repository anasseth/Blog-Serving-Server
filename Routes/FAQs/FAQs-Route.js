const express = require("express");
var router = express.Router();
const FAQController = require("../../Controllers/FAQs/FAQs-Controller");
router.use(express.static("build"));

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

router.use(requestLogger);

router.get("/", FAQController.getAllFAQs);

router.post("/", FAQController.newFAQs);

router.delete("/:id", FAQController.deleteOneFAQs);

module.exports = router;
