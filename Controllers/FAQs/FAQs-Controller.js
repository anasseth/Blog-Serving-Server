const getAllFAQs = (req, res, next) => {
  res.json({ message: "GET all FAQ" });
};

//POST '/tea'
const newFAQs = (req, res, next) => {
  res.json({ message: "POST new FAQ" });
};

//DELETE '/tea/:name'
const deleteOneFAQs = (req, res, next) => {
  res.json({ message: "DELETE 1 FAQ" });
};

//export controller functions
module.exports = {
  getAllFAQs,
  newFAQs,
  deleteOneFAQs,
};
