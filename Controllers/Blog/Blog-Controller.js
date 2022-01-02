const Blog = require("../../Models/Blog/Blog-Model");

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
    bannerImageURL:body.bannerImageURL,
    writer: body.writer,
    date: body.date,
    heading: body.heading,
    content: body.content,
    comment: null,
  });

  console.log(body);
  console.log(blogObject);

  blogObject.save().then((saveBlog) => {
    res.json(saveBlog);
  });
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
};
