const express = require("express");
var router = express.Router();
const NewsLetterController = require("../../Controllers/NewsLetter/NewsLetter-Controller");
router.use(express.static("build"));

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

router.use(requestLogger);

router.get("/", NewsLetterController.getAllNewsLetterUsers);

router.post("/", NewsLetterController.newUserForNewsLetter);

router.delete("/:id", NewsLetterController.deleteOneUserFromNewsLetter);

module.exports = router;
