const express = require("express");
var router = express.Router();
const CartController = require("../../Controllers/Cart/Cart-Controller");
router.use(express.static("build"));
const authToken = require("../../Middleware/authToken");

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

router.use(requestLogger);

router.get("/", [authToken.verifyToken], CartController.getAllCart);

router.post("/", CartController.newCart);

router.delete("/:id", [authToken.verifyToken], CartController.deleteOneCart);

router.put("/:id", [authToken.verifyToken], CartController.updateCart);

module.exports = router;
