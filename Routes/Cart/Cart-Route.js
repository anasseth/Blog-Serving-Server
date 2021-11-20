const express = require("express");
var router = express.Router();
const CartController = require("../../Controllers/Cart/Cart-Controller");
router.use(express.static("build"));

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

router.use(requestLogger);

router.get("/", CartController.getAllCart);

router.post("/", CartController.newCart);

router.delete("/:id", CartController.deleteOneCart);

module.exports = router;
