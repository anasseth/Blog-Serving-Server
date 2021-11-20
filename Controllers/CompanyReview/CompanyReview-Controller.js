const CompanyReview = require("../../Models/CompanyReview/CompanyReview-Model");

const getAllCompanyReviews = (req, res, next) => {
  CompanyReview.find({}).then((product) => {
    res.json(product);
  });
};

const newReview = (req, res, next) => {
  const body = req.body;
  console.log(req.body);
  if (body.name == undefined || body.reviewText == undefined) {
    return res.status(400).json({ error: "content missing" });
  }
  const companyReviewObject = new CompanyReview({
    name: body.name,
    reviewText: body.reviewText,
    starRating: body.starRating,
    featureOnWall: body.featureOnWall,
  });

  console.log(body);
  console.log(companyReviewObject);

  companyReviewObject.save().then((saveReview) => {
    res.json(saveReview);
  });
};

const deleteOneReview = (req, res, next) => {
    CompanyReview.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => next(error));
};

module.exports = {
  getAllCompanyReviews,
  newReview,
  deleteOneReview,
};
