require("dotenv").config();
const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");

const url = process.env.MONGODB_URI;

console.log("connecting to", url);
mongoose
  .connect(url)
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

app.use(express.static("build"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var productRouter = require("./Routes/Product/Product-Route");
var faqRouter = require("./Routes/FAQs/FAQs-Route");
var companyReviewRouter = require("./Routes/CompanyReview/CompanyRevew-Route");
var cartRouter = require("./Routes/Cart/Cart-Route");
var checkoutRouter = require("./Routes/Checkout/Checkout-Route");

app.use("/api/products", productRouter);
app.use("/api/faqs", faqRouter);
app.use("/api/companyReviews", companyReviewRouter);
app.use("/api/carts", cartRouter);
app.use("/api/checkouts", checkoutRouter);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }

  next(error);
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

app.use(errorHandler);

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
