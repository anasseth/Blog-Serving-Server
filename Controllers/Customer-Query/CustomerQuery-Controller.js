const CustomerQuery = require("../../Models/Customer-Query/CustomerQuery-Model");

const getAllCustomerQuery = (req, res, next) => {
  CustomerQuery.find({}).then((product) => {
    res.json(product);
  });
};

const newCustomerQuery = (req, res, next) => {
  const body = req.body;
  console.log(req.body);
  if (body.email == undefined) {
    return res.status(400).json({ error: "User Info Email Content Missing" });
  }
  const customerQueryObject = new CustomerQuery({
    name: body.name,
    email: body.email,
    number: body.number,
    query: body.query,
  });

  console.log(body);
  console.log(customerQueryObject);

  customerQueryObject.save().then((saveCustomerQuery) => {
    res.json(saveCustomerQuery);
  });
};

const deleteOneCustomerQuery = (req, res, next) => {
  CustomerQuery.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => next(error));
};

module.exports = {
  getAllCustomerQuery,
  newCustomerQuery,
  deleteOneCustomerQuery,
};
