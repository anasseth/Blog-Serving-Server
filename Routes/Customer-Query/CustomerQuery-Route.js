const express = require("express");
var router = express.Router();
const CustomerQueryController = require("../../Controllers/Customer-Query/CustomerQuery-Controller");
router.use(express.static("build"));

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

router.use(requestLogger);

router.get("/", CustomerQueryController.getAllCustomerQuery);

router.post("/", CustomerQueryController.newCustomerQuery);

router.delete("/:id", CustomerQueryController.deleteOneCustomerQuery);

module.exports = router;
