const express = require("express");
var router = express.Router();
const CheckoutController = require("../../Controllers/Checkout/Checkout-Controller");
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

router.get("/",[authToken.verifyToken], CheckoutController.getAllCheckout);

router.post("/", CheckoutController.newCheckout);

router.delete("/:id",[authToken.verifyToken], CheckoutController.deleteOneCheckout);

router.put("/:id",[authToken.verifyToken], CheckoutController.updateCheckout);

module.exports = router;
