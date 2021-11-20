const express = require("express");
var router = express.Router();
const CompanyReviewController = require("../../Controllers/CompanyReview/CompanyReview-Controller");
router.use(express.static("build"));

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

router.use(requestLogger);

router.get("/", CompanyReviewController.getAllCompanyReviews);

router.post("/", CompanyReviewController.newReview);

router.delete("/:id", CompanyReviewController.deleteOneReview);

module.exports = router;
