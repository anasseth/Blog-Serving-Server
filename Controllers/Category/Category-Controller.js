const Category = require("../../Models/Category/Category-Model");

const getAllCategory = (req, res, next) => {
  Category.find({}).then((product) => {
    res.json(product);
  });
};

//POST '/tea'
const newCategory = (req, res, next) => {
  const body = req.body;
  console.log(req.body);
  if (body.categoryName == undefined) {
    return res.status(400).json({ error: "content missing" });
  }
  const categoryObject = new Category({
    categoryName: body.categoryName,
    routeURL: body.routeURL,
    imageURL: body.imageURL,
    showInSideMenu: body.showInSideMenu,
    pageTitle: body.pageTitle,
    pageDescription: body.pageDescription,
    pageKeyword: body.pageKeyword,
    pageContent: body.pageContent,
  });

  console.log(body);
  console.log(categoryObject);

  categoryObject.save().then((saveCategory) => {
    res.json(saveCategory);
  });
};

//DELETE '/tea/:name'
const deleteOneCategory = (req, res, next) => {
  Category.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => next(error));
};

//export controller functions
module.exports = {
  getAllCategory,
  newCategory,
  deleteOneCategory,
};
