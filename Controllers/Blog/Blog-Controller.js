const getAllBlogs = (req, res, next) => {
  res.json({ message: "GET all FAQ" });
};

//POST '/tea'
const newBlogs = (req, res, next) => {
  res.json({ message: "POST new FAQ" });
};

//DELETE '/tea/:name'
const deleteBlog = (req, res, next) => {
  res.json({ message: "DELETE 1 FAQ" });
};

//export controller functions
module.exports = {
  getAllBlogs,
  newBlogs,
  deleteOneBlog,
};
