const NewsLetter = require("../../Models/NewsLetter/NewsLetter-Model");

const getAllNewsLetterUsers = (req, res, next) => {
  NewsLetter.find({}).then((product) => {
    res.json(product);
  });
};

const newUserForNewsLetter = (req, res, next) => {
  const body = req.body;
  console.log(req.body);
  if (body.email == undefined) {
    return res.status(400).json({ error: "User Info Content Missing" });
  }
  const userEmailNewsLetter = new NewsLetter({
    email: body.email,
  });

  console.log(body);
  console.log(userEmailNewsLetter);

  userEmailNewsLetter.save().then((saveUserEmail) => {
    res.json(saveUserEmail);
  });
};

const deleteOneUserFromNewsLetter = (req, res, next) => {
  NewsLetter.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => next(error));
};

module.exports = {
  getAllNewsLetterUsers,
  newUserForNewsLetter,
  deleteOneUserFromNewsLetter,
};
