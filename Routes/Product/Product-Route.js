const express = require("express");
var router = express.Router();
const ProductController = require("../../Controllers/Product/Product-Controller");
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

router.get("/", ProductController.getAllProduct);

router.post("/",[authToken.verifyToken], ProductController.newProduct);

router.get("/:id", ProductController.getOneProduct);

router.delete("/:id",[authToken.verifyToken], ProductController.deleteOneProduct);

module.exports = router;
