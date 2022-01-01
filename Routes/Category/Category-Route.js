const express = require("express");
var router = express.Router();
const CategoryController = require("../../Controllers/Category/Category-Controller");
router.use(express.static("build"));

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

router.use(requestLogger);

router.get("/", CategoryController.getAllCategory);

router.post("/", CategoryController.newCategory);

router.delete("/:id", CategoryController.deleteOneCategory);

module.exports = router;
