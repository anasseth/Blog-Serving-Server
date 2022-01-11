const Blog = require("../../Models/Blog/Blog-Model");
var ObjectId = require("mongodb").ObjectId;

const getAllBlogs = (req, res, next) => {
  Blog.find({}).then((blogs) => {
    res.json(blogs);
  });
};

const newBlog = (req, res, next) => {
  const body = req.body;
  console.log(req.body);
  if (body.content == undefined) {
    return res.status(400).json({ error: "Blog Content Missing" });
  }
  const blogObject = new Blog({
    name: body.name,
    keyword: body.keyword,
    pageDescription: body.pageDescription,
    pageTitle: body.pageTitle,
    urlParameter: body.urlParameter,
    bannerImageURL: body.bannerImageURL,
    writer: body.writer,
    date: body.date,
    heading: body.heading,
    content: body.content,
    views: body.views,
    likes: body.likes,
    category: body.category,
    type: body.type,
    comment: null,
  });

  console.log(body);
  console.log(blogObject);

  blogObject.save().then((saveBlog) => {
    res.json(saveBlog);
  });
};

const updateBlog = (req, res, next) => {
  const body = req.body;
  console.log(req.body);

  const blogObject = {
    name: body.name,
    keyword: body.keyword,
    pageDescription: body.pageDescription,
    pageTitle: body.pageTitle,
    urlParameter: body.urlParameter,
    bannerImageURL: body.bannerImageURL,
    writer: body.writer,
    date: body.date,
    heading: body.heading,
    content: body.content,
    views: body.views,
    likes: body.likes,
    category: body.category,
    type: body.type,
    comment: body.comment,
  };

  console.log(body);
  console.log(blogObject);

  if (blogObject.comment != null || blogObject.comment != undefined) {
    Blog.findOne({ _id: ObjectId(req.params.id) }).exec(function (err, data) {
      if (data.comment != null) {
        data.comment.push(blogObject.comment[0]);
      } else {
        data.comment = [];
        data.comment.push(blogObject.comment[0]);
      }
      Blog.findByIdAndUpdate(req.params.id, data, {
        new: true,
      })
        .then((updatedBlogObject) => {
          res.json(updatedBlogObject);
        })
        .catch((error) => next(error));
    });
  } else {
    Blog.findByIdAndUpdate(req.params.id, blogObject, {
      new: true,
    })
      .then((updatedBlogObject) => {
        res.json(updatedBlogObject);
      })
      .catch((error) => next(error));
  }
};

//DELETE '/tea/:name'
const deleteOneBlog = (req, res, next) => {
  Blog.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => next(error));
};

//export controller functions
module.exports = {
  getAllBlogs,
  newBlog,
  deleteOneBlog,
  updateBlog,
};
