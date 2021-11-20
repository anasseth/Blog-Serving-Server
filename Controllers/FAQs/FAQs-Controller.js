const FAQ = require("../../Models/FAQs/FAQs-Model");

const getAllFAQs = (req, res, next) => {
  FAQ.find({}).then((product) => {
    res.json(product);
  });
};

//POST '/tea'
const newFAQs = (req, res, next) => {
  const body = req.body;
  console.log(req.body);
  if (body.question == undefined) {
    return res.status(400).json({ error: "content missing" });
  }
  const faqObject = new FAQ({
    question: body.question,
    answer: body.answer,
  });

  console.log(body);
  console.log(faqObject);

  faqObject.save().then((saveFAQ) => {
    res.json(saveFAQ);
  });
};

//DELETE '/tea/:name'
const deleteOneFAQs = (req, res, next) => {
  FAQ.findByIdAndRemove(req.params.id)
  .then((result) => {
    res.status(204).end();
  })
  .catch((error) => next(error));
};

//export controller functions
module.exports = {
  getAllFAQs,
  newFAQs,
  deleteOneFAQs,
};
