const express = require("express");
var router = express.Router();
const BlogController = require("../../Controllers/Blog/Blog-Controller");
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

router.get("/", BlogController.getAllBlogs);

router.post("/",[authToken.verifyToken],BlogController.newBlog);

router.delete("/:id",[authToken.verifyToken],BlogController.deleteOneBlog);

// router.put("/:id", BlogController.updateCart);

module.exports = router;
